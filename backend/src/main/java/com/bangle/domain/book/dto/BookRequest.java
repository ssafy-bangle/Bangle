package com.bangle.domain.book.dto;

import java.util.List;

import com.bangle.domain.book.entity.Book;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter

public class BookRequest{
	List<RestRequest> bookList;
}
