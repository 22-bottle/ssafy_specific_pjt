package ssafy.hico.domain.book.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ssafy.hico.domain.book.dto.request.BookAddRequest;
import ssafy.hico.domain.book.service.BookService;
import ssafy.hico.domain.book.service.S3Uploader;

import java.io.IOException;

@Slf4j
@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
public class BookController {

    private final S3Uploader s3Uploader;
    private final BookService bookService;

    @PostMapping("/upload")
    public ResponseEntity<?> bookAdd(@RequestPart(value = "bookAddRequest") BookAddRequest bookAddRequest,
                                     @RequestPart(value = "bookImg", required = false) MultipartFile multipartFile) {
        String fileName = "";
        if (multipartFile != null) {
            try {
                fileName = s3Uploader.upload(multipartFile, "books");
                bookService.addBook(bookAddRequest, fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

}
