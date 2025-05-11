package TMS.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import TMS.model.Users;

@Repository
public interface UsersRepository extends CrudRepository<Users, String> { 
	
}


