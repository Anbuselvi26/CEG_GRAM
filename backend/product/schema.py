
import graphene
from graphene_django import DjangoObjectType
from graphene.relay.node import Node
import datetime
from datetime import datetime
from graphene_django.filter import DjangoFilterConnectionField
from django.db.models import Q
from product.models import (
    User,
    Role,
    Post,
    Type,
    Category,
    Club
 )

#---------------------------------------------------------- Types ----------------------------------------------------------#
#

class UserView(DjangoObjectType):
    class Meta:
        model=User
        filter_fields = {
            'id': ['exact', 'icontains'],
            'roleStatus': ['exact', 'icontains'],
            'username': ['exact', 'icontains']
        }
        interfaces = (graphene.relay.Node,)

class RoleView(DjangoObjectType):
    class Meta:
        model = Role

class TypeView(DjangoObjectType):
    class Meta:
        model = Type

class CategoryView(DjangoObjectType):
    class Meta:
        model = Category

class ClubView(DjangoObjectType):
    class Meta:
        model = Club

class PostView(DjangoObjectType):
    class Meta:
        model = Post

#------------------------------------------------------ Querys ---------------------------------------------------------
#data retrieve
# field - single objects
# list - multiple objects
# UserView - type, all_user- active users returned
class UserQueries(graphene.ObjectType):
    user_details=graphene.List(UserView,search=graphene.String(), first=graphene.Int(), skip=graphene.Int(),orderBy=graphene.List(of_type=graphene.String))
    user_detail=graphene.Field(UserView,Id=graphene.String())
    all_users_detail=graphene.List(UserView)
    all_user=graphene.List(UserView)
    rolewise_data=graphene.List(UserView,designation=graphene.String())
    login = graphene.Field(UserView,Id=graphene.String())
    logout = graphene.Field(UserView,Id=graphene.String())

    # passed as ip. 

    def resolve_all_user(self,info, **kwargs):
       return User.objects.filter(role_status="Active")
    
    def resolve_rolewise_data(self,info,designation, **kwargs):
       return User.objects.filter(designation=designation).filter(role_status="Active")
    
    def resolve_all_users_detail(self,info, **kwargs):
       return User.objects.all()
    
    def resolve_user_details(self, info, search=None, first=None, skip=None, *args, **kwargs):
        orderBy =kwargs.get('orderBy',None) #get particular user id
        if search  != '':
            qs = User.objects.filter(Q(username=search))
            val = [skip,first]
            if val:
                qs=qs[val[0]:val[1]]
                return qs
            if orderBy:
                qs1 = User.objects.order_by(*orderBy)
            return qs1
        else:
            qs = User.objects.all()
            val = [skip,first]
            if val:
                qs=qs[val[0]:val[1]]
                return qs
            if orderBy:
                qs1 = User.objects.order_by(*orderBy)
            return qs1
   
    def resolve_login(self,info,Id,**kwargs):
        _, raw_pk = Node.from_global_id(Id)
        return User.objects.get(id=raw_pk) 

    def resolve_logout(self,info,Id,**kwargs):
        _, raw_pk = Node.from_global_id(Id)
        return User.objects.get(id=raw_pk) 

    def resolve_user_detail(self,info,Id,**kwargs):
        _, raw_pk = Node.from_global_id(Id) #decodes bigint
        return User.objects.get(id=raw_pk)   #return required obj based on id - get

class RoleQueries(graphene.ObjectType):
    all_role_details=graphene.List(RoleView)
    
    def resolve_all_role_details(self,info, **kwargs):
        return Role.objects.all()

class TypeQueries(graphene.ObjectType):
    all_type_details=graphene.List(TypeView)
    
    def resolve_all_type_details(self,info, **kwargs):
        return Type.objects.all()

class CategoryQueries(graphene.ObjectType):
    all_Category_details=graphene.List(TypeView,id=graphene.String())
    
    def resolve_all_Category_details(self,id,info, **kwargs):
        return Category.objects.filter(type_id=id)

class ClubQueries(graphene.ObjectType):
    club_details=graphene.List(UserView,search=graphene.String(), first=graphene.Int(), skip=graphene.Int(),orderBy=graphene.List(of_type=graphene.String))
    
    def resolve_club_details(self, info, search=None, first=None, skip=None, *args, **kwargs):
        orderBy =kwargs.get('orderBy',None)
        if search  != '':
            qs = Club.objects.filter(Q(username=search)).filter(status="Active")
            val = [skip,first]
            if val:
                qs=qs[val[0]:val[1]]
                return qs
            if orderBy:
                qs1 = Club.objects.order_by(*orderBy)
            return qs1
        else:
            qs = Club.objects.filter(status="Active")
            val = [skip,first]
            if val:
                qs=qs[val[0]:val[1]]
                return qs
            if orderBy:
                qs1 = Club.objects.order_by(*orderBy)
            return qs1

class PostQueries(graphene.ObjectType):
    post_details=graphene.List(PostView,search=graphene.String(), first=graphene.Int(), skip=graphene.Int(),orderBy=graphene.List(of_type=graphene.String))
    
    def resolve_post_details(self, info, search=None, first=None, skip=None, *args, **kwargs):
        orderBy =kwargs.get('orderBy',None)
        if search  != '':
            qs = Post.objects.filter(Q(username=search)).filter(status="Active")
            val = [skip,first]
            if val:
                qs=qs[val[0]:val[1]]
                return qs
            if orderBy:
                qs1 = Post.objects.order_by(*orderBy)
            return qs1
        else:
            qs = Post.objects.filter(status="Active")
            val = [skip,first]
            if val:
                qs=qs[val[0]:val[1]]
                return qs
            if orderBy:
                qs1 = Post.objects.order_by(*orderBy)
            return qs1


    
#----------------------------------------------- inputs ------------------------------------------------
class UsersDetailsInput(graphene.InputObjectType):
    email = graphene.String()
    password = graphene.String()
    username = graphene.String()
    role = graphene.String()
    roleStatus = graphene.String() 

class RoleDetailsInput(graphene.InputObjectType):
    role = graphene.String()
    role_status = graphene.String()

class TypeDetailsInput(graphene.InputObjectType):
    type = graphene.String()
    status = graphene.String()

class CategoryDetailsInput(graphene.InputObjectType):
    type = graphene.String()
    category = graphene.String()
    status = graphene.String()    

class ClubDetailsInput(graphene.InputObjectType):
    admin = graphene.String()
    name = graphene.String()
    type = graphene.String()
    category = graphene.String()
    mobile_no = graphene.String()
    description = graphene.String()
    email = graphene.String()
    status = graphene.String()

class PostDetailsInput(graphene.InputObjectType):
    club = graphene.String()
    post_id = graphene.String()
    admin = graphene.String()
    post_title = graphene.String()
    post_description = graphene.String()


# --------------------------------------- Mutation --------------------------------------------------------

class UserDetailsData(graphene.Mutation):
    users=graphene.Field(UserView)

    class Arguments: 
        input = UsersDetailsInput(required=True)
        
        
    def mutate(self, info, input):    
        data = User.objects.create(email= input.email ,
                                         password=input.password,
                                         username= input.username,
                                        role=input.role,
                                         role_status=input.roleStatus)
        data.save()
        return UserDetailsData(users=data) 
    
class DeleteUsersDetails(graphene.Mutation):
    set = graphene.Boolean()
    
    class Arguments:
        id=graphene.String()    
        
    def mutate(self,info,id):
        _, raw_pk = Node.from_global_id(id)
        data = User.objects.get(id=raw_pk)
        data.delete()
        return DeleteUsersDetails(set=True)

class RoleDetailsData(graphene.Mutation):
    roles=graphene.Field(RoleView)

    class Arguments: 
        input = RoleDetailsInput(required=True)
        
        
    def mutate(self, info, input):    
        data = Role.objects.create(role= input.role ,
                                         role_status=input.role_status)
        data.save()
        return RoleDetailsData(roles=data) 

class TypeDetailsData(graphene.Mutation):
    types=graphene.Field(TypeView)

    class Arguments: 
        input = TypeDetailsInput(required=True)
        
        
    def mutate(self, info, input):    
        data = Type.objects.create(type= input.type ,
                                         status=input.status)
        data.save()
        return TypeDetailsData(types=data)

class CategoryDetailsData(graphene.Mutation):
    categorys=graphene.Field(CategoryView)

    class Arguments: 
        input = CategoryDetailsInput(required=True)
        
        
    def mutate(self, info, input):    
        data = Type.objects.create(type= input.type ,
                                         category=input.category,
                                         status=input.status)
        data.save()
        return CategoryDetailsData(categorys=data)

class ClubDetailsData(graphene.Mutation):
    clubs=graphene.Field(ClubView)

    class Arguments: 
        input = TypeDetailsInput(required=True)
        
        
    def mutate(self, info, input):    
        data = Type.objects.create(admin = input.admin,
                                   name = input.admin,
                                   type = input.type,
                                   category = input.category,
                                   mobile_no = input.mobile_no,
                                   description = input.description,
                                   email = input.email,
                                   status = input.status)
        data.save()
        return ClubDetailsData(clubs=data)

class PostDetailsData(graphene.Mutation):
    posts=graphene.Field(PostView)

    class Arguments: 
        input = PostDetailsInput(required=True)
        
        
    def mutate(self, info, input):    
        data = Type.objects.create(club = input.club,
                                   post_id = input.post_id,
                                   admin = input.admin,
                                   post_title = input.post_title,
                                   post_description = input.post_description)
        data.save()
        return PostDetailsData(posts=data)
    
#############################################################################################
class UserstMutations(graphene.ObjectType):
    userdetail = UserDetailsData.Field()
    userdelete = DeleteUsersDetails.Field()
    roledetail = RoleDetailsData.Field()
    typedetail = TypeDetailsData.Field()
    categorydetail = CategoryDetailsData.Field()
    clubdetail = ClubDetailsData.Field()
    postdetail = PostDetailsData.Field()
    
#methods