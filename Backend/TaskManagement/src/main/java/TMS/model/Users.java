package TMS.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class Users {
	
	@Column(name="Fullname",nullable = false)
	String fullname;
	@Column(name="Email",nullable = false)
	@Id
	String email;
	@Column(name="Password",nullable = false)
	String password;
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Users [fullname=" + fullname + ", email=" + email + ", password=" + password + "]";
	}
	
	
	
	
	

}