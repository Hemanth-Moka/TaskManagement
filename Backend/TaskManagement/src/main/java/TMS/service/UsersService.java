package TMS.service;

import java.util.List;

import TMS.model.Users;

public interface UsersService {
	
	public String addUsers(Users users);
	public String updateUsers(Users users);
	public String deleteUsers(String uid);
	public List<Users> displayAllUsers();
	public Users displayById(String uid);
	
}
