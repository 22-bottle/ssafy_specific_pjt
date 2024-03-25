package ssafy.hico.domain.book.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import ssafy.hico.domain.book.dto.request.BookAddRequest;
import ssafy.hico.domain.book.entity.BookPage;
import ssafy.hico.domain.book.repository.BookRepository;
import ssafy.hico.domain.stage.entity.Stage;
import ssafy.hico.domain.stage.repository.StageRepository;
import ssafy.hico.global.response.error.ErrorCode;
import ssafy.hico.global.response.error.exception.CustomException;

@Service
@Component
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;
    private final StageRepository stageRepository;

    public void addBook(BookAddRequest bookAddRequest, String fileName) {
        Stage stage = stageRepository.findById(bookAddRequest.getStageId())
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_FOUND_STAGE));
        BookPage book = bookAddRequest.createBook(fileName, stage);
        bookRepository.save(book);
    }

}
