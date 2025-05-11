package TMS.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import TMS.service.UsersService;
import TMS.model.Users;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("api")
public class UsersController {
	@Autowired
	private UsersService service;
	
	@GetMapping("/")
	public String demo()
	{
		return "Rest API With Demo";
	}
	
	@PostMapping("add")
	public String addUsers(@RequestBody Users users)
	{
		return service.addUsers(users);
	}
	
	@PostMapping("update")
	public String updateUsers(@RequestBody Users users)
	{
		return service.updateUsers(users);
	}
	
	@GetMapping("displayall")
	public List<Users> displayAllUsers()
	{
		return service.displayAllUsers();
	}
	
	@GetMapping("display")
	public Users displayusersbyid(@RequestParam("email") String uid)
	{
		return service.displayById(uid);
	}
	
	@GetMapping("delete/{email}")
	public String deletusers(@PathVariable("email") String uid)
	
	{
		return service.deleteUsers(uid);
	}
	

}
