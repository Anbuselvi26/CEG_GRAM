from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    role = models.CharField(max_length=10, blank=True)
    role_status = models.CharField(max_length=10, blank=True)
    mobile_no = models.CharField(blank=True, max_length=15)
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name=('groups'),
        blank=True,
        related_name='customuser_set', 
        related_query_name='customuser',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name=('user permissions'),
        blank=True,
        related_name='customuser_set', 
        related_query_name='customuser',
    )

    USERNAME_FIELD = "username"


class Role(models.Model):
    role = models.CharField(blank=False, max_length=50)
    role_status = models.CharField(blank=False, max_length=50)
    last_update = models.DateTimeField(auto_now=True, blank=True)

class Type(models.Model):
    type = models.CharField(blank=False, max_length=75)
    status = models.CharField(blank=False, max_length=10)
    last_update = models.DateTimeField(auto_now=True, blank=True)

class Category (models.Model):
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    category = models.CharField(blank=False, max_length=75)
    status = models.CharField(blank=False, max_length=10)
    last_update = models.DateTimeField(auto_now=True, blank=True)    

class Club(models.Model):
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(blank=False, max_length=50)
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    mobile_no = models.CharField(blank=False, max_length=15)
    description = models.CharField(blank=False, max_length=500)
    email = models.CharField(blank=False, max_length=75)
    status = models.CharField(blank=False, max_length=10)
    last_update = models.DateTimeField(auto_now=True, blank=True)

class Post(models.Model):
    club = models.ForeignKey(Club, on_delete=models.CASCADE)
    post_id = models.BigAutoField(primary_key=True)
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
    post_title = models.CharField(blank=False, max_length=255)
    post_description = models.CharField(blank=False, max_length=255)
    post_deletion_date = models.CharField(max_length=10, blank=True)
    last_update = models.DateTimeField(auto_now=True, blank=True)





# CREATE TABLE post (
#     post_id INT PRIMARY KEY AUTO_INCREMENT,
#     admin_id INT,
#     post_title VARCHAR(255),
#     post_description TEXT,
#     post_deletion_date DATETIME,
#     FOREIGN KEY (admin_id) REFERENCES admin(admin_id)
# );

# CREATE TABLE admin (
#     admin_id INT PRIMARY KEY AUTO_INCREMENT,
#     admin_email VARCHAR(255) UNIQUE NOT NULL,
#     admin_password VARCHAR(255) NOT NULL,
#     club_name VARCHAR(255),
#     club_email VARCHAR(255),
#     description TEXT,
#     type ENUM('dropdown_value_1', 'dropdown_value_2', 'dropdown_value_3') -- Add more values if needed
# );


# CREATE TABLE contact_info (
#     contact_id INT PRIMARY KEY AUTO_INCREMENT,
#     admin_id INT,
#     contact_info VARCHAR(255),
#     FOREIGN KEY (admin_id) REFERENCES admin(admin_id)