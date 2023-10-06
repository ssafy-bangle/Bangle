package com.bangle.domain.review.service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
@Transactional
public class AwsS3Service {
	private final AmazonS3 s3;
	private final RestTemplate restTemplate;

	@Value("${cloud.aws.s3.bucket}")
	private String bucket;
	@Value("${cloud.aws.prefix.url}")
	private String prefix;

	public String uploadImageToS3(MultipartFile cover){ // 이미지를 S3에 업로드
		String fileName = uploadImage(cover);
		return prefix + fileName;
	}

	public String uploadFromUrlToS3(String coverUrl) {
		// get img file from coverURL
		try {
			byte[] cover = restTemplate.getForObject(URI.create(coverUrl), byte[].class);
			InputStream inputStream = new ByteArrayInputStream(Objects.requireNonNull(cover));
			String fileName = UUID.randomUUID().toString().concat(".png");
			s3.putObject(new PutObjectRequest(bucket, fileName, inputStream, new ObjectMetadata())
				.withCannedAcl(CannedAccessControlList.PublicRead));
			return prefix + fileName;
		} catch (NullPointerException e) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "사진 업로드에 실패했습니다.");
		} catch (Exception e) {
			e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "사진 업로드에 실패했습니다.");
		}
	}

	private String uploadImage(MultipartFile cover){
		String fileExtension = getFileExtension(cover.getOriginalFilename());
		// 업로드된 파일의 MIME 타입
		String mimeType = cover.getContentType();

		// 이미지 파일인지 확인
		if (!isImageFile(fileExtension, mimeType)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "이미지 파일만 업로드 가능합니다.");
		}
		String fileName = createFileName(cover.getOriginalFilename());
		ObjectMetadata objectMetadata = new ObjectMetadata();
		objectMetadata.setContentLength(cover.getSize());
		objectMetadata.setContentType(cover.getContentType());

		try (InputStream inputStream = cover.getInputStream()) {
			s3.putObject(new PutObjectRequest(bucket, fileName, inputStream, objectMetadata)
				.withCannedAcl(CannedAccessControlList.PublicRead));
		} catch (IOException e) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "사진 업로드에 실패했습니다.");
		}
		return fileName;
	}

	// 파일의 확장자 갖고오기, 확장자가 없는 파일이면 Exception
	private String getFileExtension(String fileName) {
		try {
			return fileName.substring(fileName.lastIndexOf("."));
		} catch (StringIndexOutOfBoundsException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 형식의 파일(" + fileName + ") 입니다.");
		}
	}

	/// 랜덤파일이름으로 바꾸기
	private String createFileName(String fileName) {
		return UUID.randomUUID().toString().concat(getFileExtension(fileName));
	}

	// 이미지 파일인지 확인하는 메서드
	private boolean isImageFile(String fileExtension, String mimeType) {
		List<String> allowedExtensions = Arrays.asList(".jpg", ".jpeg", ".png", ".gif", ".bmp", "tiff", ".tif", "webp",
			"svg");
		List<String> allowedMimeTypes = Arrays.asList("image/jpeg", "image/png", "image/gif");
		return allowedExtensions.contains(fileExtension.toLowerCase()) && allowedMimeTypes.contains(mimeType);
	}

	public void deleteImage(String image){
		s3.deleteObject(new DeleteObjectRequest(bucket, image));
	}

}
