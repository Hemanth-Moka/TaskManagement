package TMS.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TMS.model.Users;
import TMS.Repository.UsersRepository;

@Service
public class UsersServiceImplementation implements UsersService {
    
	
	@Autowired
	private UsersRepository repository;
	
	@Override
	public String addUsers(Users users) {
		repository.save(users);
		return "User added Successfully";
	}

	@Override
	public String updateUsers(Users users) {
		String msg = null;
		Optional<Users> object =repository.findById(users.getEmail());
		if(object.isPresent())
		{
			
			Users u = object.get();
			u.setFullname(users.getFullname());
			u.setPassword(users.getPassword());
			
			repository.save(u);
			return "User Updated Successfully";
			
		}
		else
		{
			return "User ID not found";
		}
	}

	@Override
	public String deleteUsers(String uid) {
		Optional<Users> object =repository.findById(uid);
		if(object.isPresent())
		{
			
			Users u = object.get();;
			
			repository.delete(u);
			return "User Deleted Successfully";
			
		}
		else
		{
			return "User ID not found";
		}
	}
	

	@Override
	public List<Users> displayAllUsers() {
		 return (List<Users>) repository.findAll();
	}

	@Override
	public Users displayById(String uid) {
		
		return repository.findById(uid).get();
	}
	

}
