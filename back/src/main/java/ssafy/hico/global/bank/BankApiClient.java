package ssafy.hico.global.bank;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import ssafy.hico.global.response.error.exception.CustomException;

import java.io.IOException;

@Component
public class BankApiClient {
    public String getResponse(String url, Object requestBody) {
        String response = null;
        WebClient webClient = WebClient.create(url);
        try {
            response = webClient.post()
                    .uri(url)
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class).block();
        }catch (WebClientResponseException exception) {
            String responseBody = exception.getResponseBodyAsString();
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                BankErrorResponse errorResponse = objectMapper.readValue(responseBody, BankErrorResponse.class);
                throw new CustomException(errorResponse.getResponseCode(), errorResponse.getResponseMessage());
            } catch (IOException e) {
                e.printStackTrace(); // JSON 파싱 실패 처리
            }
        }
        return response;
    }
}
