from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Book

# Create your views here.
class StringListView(APIView):
    def post(self, request, format=None):

        # 유저의 구매목록
        req_data = request.data['bookList']
        req_title_set = set()
        req_id_set = set()
        for req in req_data:
            req_id_set.add(req['id'])
            req_title_set.add(req['title'])
        # 모든 책들 기반으로 할거임
        all_books = Book.objects.all()
        data = dict()
        data['id'] = []
        data['introduction'] = []
        data['title'] = []
        for book in all_books:
            data['id'].append(book.id)
            data['introduction'].append(book.introduction)
            data['title'].append(book.title)
        # DF형태로 만들기
        data = pd.DataFrame(data)
        data['introduction'] = data['introduction'].fillna('')

        tfidf_matrix = TfidfVectorizer().fit_transform(data['introduction'])
        # 코사인 유사도 구하는 부분
        cosine_similar = cosine_similarity(tfidf_matrix, tfidf_matrix)
        title_to_idx = dict(zip(data['title'], data.index))

        # 제목이 title인 책과 비슷한 내용의 책 상위 10개의 pk값 모아서 return
        def get_recommend(title, cosine_similar = cosine_similar):
            idx = title_to_idx[title]
            score = list(enumerate(cosine_similar[idx]))
            score = sorted(score, key=lambda x:-x[1])[1:13]
            # print(data['id'].iloc[book_idx])
            return [data['id'][i[0]] for i in score]

        recommend_books_id_set = set()
        for i in req_title_set:
            get_recommend_list = get_recommend(i)
            for idx in get_recommend_list:
                if idx not in req_id_set:  # 구매목록에 있는 책은 추천 안할거임
                    recommend_books_id_set.add(idx)
        """
        다듬어야 할듯 정렬된 채로 가는지도 모르겟음
        """
        BookResponse = []
        # DTO형태로 담아서 잘 보내주기
        for idx in recommend_books_id_set:
            book = Book.objects.get(id=idx)
            book_response_dict = dict()
            book_response_dict['id'] = book.id
            book_response_dict['title'] = book.title
            book_response_dict['genre'] = book.genre
            book_response_dict['purchasePrice'] = book.purchase_price
            book_response_dict['rentalPrice'] = book.rental_price
            book_response_dict['averageScore'] = book.average_score
            book_response_dict['cover'] = book.cover
            BookResponse.append(book_response_dict)
        return Response({'books': BookResponse}, status=status.HTTP_200_OK)


