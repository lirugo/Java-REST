package example.test.repo;

import example.test.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepo extends JpaRepository<Message, Long> {
    public List<Message> findAllByOrderByIdAsc();
}
