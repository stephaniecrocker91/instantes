INSTANTES - An interactive image sharing app
==================================

* * *

ABOUT THE WEBSITE:
------------------

* * * 


[DEPLOYED API HEROKU LINK](https://instantes-drf-api.herokuapp.com/)
[DEPLOYED FRONTEND HEROKU LINK - LIVE SITE](https://instantes-react.herokuapp.com/)
[DEPLOYED BACKEND GITHUB REPOSITORY](https://github.com/stephaniecrocker91/djangorestframework-api)


_Instantes_ is a public online blog-styled media platford where users can create a profile and post their images along with a title and content. Users can also view other users profiles, comment, like and favourite them! This interactive platform is designed to provide a a rich online community as users interact with each others posts.

<img src="src/assets/amiresponsive.png" width="500px">
<img src="src/assets/home.png" width="500px">

* * * 


## TARGET AUDIENCE:

* * *

This platform targets pree-teens, teenagers and adults. Anyone who wants to can create a profile can post images and content and connect with others! From grandma posting cute cat pics, to professional photographers.. everyone can find their place in Instantes. The search feature allows for people to find content they are interested on, follow the profiles and even bookmark the posts.

*   Children 13+ (who are allowed to be on social media)
*   Adults

  
* * *

USER STORIES:
-------------

* * *
Navigation & Authentication
1. Navigation: As a user I can view the navbar from every page so that I can navigate between pages  easily.
2. Routing: As a user I can navigate through pages quickly and easily so that I can view the content without having to refresh the page.
3. Authentication - Sign up: As a user I can create a profile so that I can access all the features available for signed up users.
4. Authentication - Sign in: As a user I can sign in to the app so that I can access all the functionality available for logged in users.
5. Authentication - Logged in Status: As a user can easily tell if I am logged in or not.
6. Authentication - Refreshing access tokens: As a user I am able to remain logged in until I decide to log-out so that my experience as a user is enjoyable.
7. Navigation: Conditional rendering - As a logged out user I can clearly see sign in and sign up options so that I can easily sign in or sign up if I want to.
8. Avatar: As a user I can view user's  images so that I can easily identify each user.

Adding, Liking and bookmarking Posts
9. Create posts: As a logged in user I can create posts so that I can share my images with anyone who has access to this app.
10. View a post: As a user I can view the details of a post so that I can know more about it.
11. Like a post: As a logged in user I can manually like a post so that I can show the comunity what I like.
12. Bookmark a post: As a logged in user I can manually bookmark a post so that I can save what I like what I like.

The Posts Page
1. View most recent posts: As a user I can posts ordered by most recently created first, so that I don't miss any new content.
2. As a user, I can search for posts using keywords, so that I can find the content I am most interested in.
3. View bookmarked posts: As a logged in user save posts I liked so that I can easily view them again and again!
4. View posts of followed users: As a logged in user I can follow users so I can filter the content I view and keep up with their posting.
5. Infinite scroll: As a user I can infinately scroll through posts, so that I don't have to click on "next page" etc

The Post Page
1. Post page: As a user I can view individual posts page so that I can read the post comments.
2. Edit post: As a post owner I can edit my post title, content and image so that I can correct or change my post once created.
3. Create a comment: As a logged in user I can comment a post so that I can express my opinions it and interact with people.
4. Comment date: As a user I can see how long ago a comment was made so that I know when this was written.
5. View comments: As a user I can view post comments so that I can see what others think about this post.
6. Delete comments: As the owner of a comment I can delete my comment so that I have control over my discussions in the forum.
7. Edit a comment: As the owner of a comment I can edit my comment so that I update it if wanted.
8. Most popular posts: As a user I can see a list of the most liked posts so that I can see which ones are the most popular ones.

The Profile Page
1. Profile page: As a user I can view other users profiles so that I can view their content and potentially intercat with them.
2. Most followed profiles: As a user I can see a list of the most followed profiles so that I can see which ones are the most popular ones.
3. User profile - user stats: As a user I can view the stats about a user including bio, number of posts, follows, bookmarks and users followed so that I can know more about the profile.
4. Follow/Unfollow a user: As a logged in user I can follow or unfollow users so that I can filter the posts I want in my feed.
5. View all posts by a specific user: As a user I can view all the posts created by one specific user so that I can view their content and see if I would like to follow them or not.
6. Edit profile: As a logged in user I can edit my profile so that I can update and change it when I like, to best express myself.
7. Update username and password: As a logged in user I can update my username and password so that I can change my display name whenever I like and always keep my profile safe.


* * * 


STRATEGY:
---------

* * *

Create an aesthetically pleasing, simple yet fast  open source user interface content sharing app that is easy to navigate. The site allows users to create their profile (including avatar, username and bio), and upload their own content including photos, titles and decriptions. Users can also view and interact with other users posts: liking, commenting and saving as favourites. Their favourites will all be displayed in their favourites page.


The site will allow for user authentification, and basic CRUD functionality.


The goal is to create a code that is clear and allows you to update with ease. 

* * * 

STRUCTURE:
----------

* * *

### Initial Home Page

* * *


*   LANDING PAGE: This is the page that initially loads when you first arrive at the site. Without logging in....
    * Navbar: Header title "Instantes", Home, Sign In and SignUp links (containing font awesome icons).
    * Posts rendered by all users
    * Search bar where you can search posts by relevant keyword.
    * List of most followed profiles
    * List of most liked posts
*   LANDING PAGE: Once logged in....
    * Only difference is in the Navbar: App name, AddPost, Home, Feed, Liked, Favourite, Sign Out, and Profile link and avatar.




<img src="src/assets/home.png" width="500px">

* * * 

### Sign In Page 

* * *

When user clicks a on Sign In link on navbar:

* NavBar displays: App title, Home, Sign In (is styled differently to stand out.), and Sign Up link 
* Sign In form containing the following:
    * Form title: Sign In.
    * Username
    * Password
    * Sign in Button
    * Link below to Sign Up (in case user has not created a profile yet!)
* Image by the form. This image disappears when using smaller mobile screens.


<img src="src/assets/signin.png" width="500px">

### Sign Up Page 

* * *

When user clicks a on Sign Up link on navbar:

* NavBar displays: App title, Home, Sign In, and Sign Up (is styled differently to stand out.)link .
* Sign Up form containing the following:
    * Form title: Sign Up.
    * Username
    * Password
    * Confirm password
    * Sign Up Button
    * Link below to Sign Up (in case user already has an account!)
* Image by the form. This image disappears when using smaller mobile screens.


<img src="src/assets/signup.png" width="500px">

### Feed Page 

* * *

When the logged in user clicks a on the Feed link on navbar:

* NavBar displays with logged in icons as previous: Feed link is styled differently to stand out.
* Search field.
* Listed posts rendered below. Please note these are the posts of followed user only! Each post displays:
    * Post author with avatar by it.
    * Date of post
    * Image
    * Image title
    * Image description content
    * Links: Like button and count, Bookmark button and count, and Comment fontaweson icon and count
* List of most followed users
* List of most liked posts


<img src="src/assets/feed.png" width="500px">


* * * 

### Individual Post Page

* * *

When user clicks on any Post, the user can view the individual post page which contains...

* NavBar displays with logged in icons/logged out icons. 
* individual post which displays:
    * Post author with avatar by it.
    * Date of post
    * Image
    * Image title
    * Image description content
    * Links: Like button and count, Bookmark button and count, and Comment fontawesome icon and count
    * Comment sections (if user is logged in they have the option to comment. If they are not, they can only view the comments.)
* List of most followed users
* List of most liked posts


<img src="src/assets/post.png" width="500px">

Logged in
<img src="src/assets/comments2.png" width="500px">

Logged out
<img src="src/assets/comments.png" width="500px">
  

* * * 

### Add Post Page

* * *

When logged in user clicks on Add Post in the NavBar, the user can view...

* NavBar displays with logged in icons as previous. Create Post link is larger and underlined.
* Create Post Form including the following fields:
    * Image user can click on to upload image.
    * Title input field
    * Description field
    * Create button
    * Cancel button


<img src="src/assets/addpost.png" width="500px">

* * * 

### Edit Post Page

* * *

When logged in user clicks on three dots above their own post and the edit symbol, the user can view...

* NavBar displays with logged in icons as previous.
* Create Post Form including the following fields with default content:
    * Image user can click on button below to upload new image.
    * Title input field
    * Description field
    * Save button
    * Cancel button


<img src="src/assets/editpost.png" width="500px">

* * * 

### Liked Page 

* * *

When clicking liked, the user can view all their liked posts. The layout of the page is the same as the home page and the feed page. Only difference is this will display the users liked posts only!



<img src="src/assets/liked.png" width="500px">

* * * 

### Bookmarks Page 

* * *

When clicking bookmarks, the user can view all their favourite bookmarked posts. The layout of the page is the same as the home page and the feed page. Only difference is this will display the users bookmarked posts only!



<img src="src/assets/bookmarked.png" width="500px">

* * * 


### Profile Page

* * *

When logged in user clicks on Profile in the NavBar, the user can view...

* NavBar displays with logged in icons as previous.
* User profile details:
    * Username
    * Avatar
    * Posts Count
    * Followers Count
    * Following Count
    * 3 dots dropdown with option to edit profile, change username, change password (and in future delete profile).
* Listed posts of logged in user rendered below. Each post displays the usual:
    * Post author with avatar by it.
    * Date of post
    * Image
    * Image title
    * Image description content
    * Links: Like button and count, Bookmark button and count, and Comment fontaweson icon and count
    * An extra 3 dot dropdown menu to edit or delete the post.
* List of most followed users
* List of most liked posts


<img src="src/assets/profile.png" width="500px">
<img src="src/assets/threedots.png" width="500px">

* * * 
  
### Edit Profile Page

* * *

When logged in user clicks on the edit icon in 3 dots dropdown in Profile Page, the user can view...

* NavBar displays with logged in icons as previous.
* Update Profile Form including the following:
    * Current avatar.
    * Change the image button that user can click to upload new avatar
    * Bio text input field
    * Save button
    * Cancel button
    * In future: delete post!


<img src="src/assets/editprofile.png" width="500px">

  
### Edit Username Page

* * *

When logged in user clicks on the edit icon in 3 dots dropdown in Profile Page, and change username, the user can view...

* NavBar displays with logged in icons as previous.
* Edit usernmae:
    * Subtite
    * Current username as default, which can be edited
    * Save button
    * Cancel button 
    
    <img src="src/assets/editusername.png" width="500px">


* * * 

### Edit Password Page

* * *

When logged in user clicks on the edit icon in 3 dots dropdown in Profile Page, and change password, the user can view...

* NavBar displays with logged in icons as previous.
* Edit usernmae:
    * Subtite
    * New password input field
    * Confirm new password input field
    * Save button
    * Cancel button 
    
    <img src="src/assets/editpassword.png" width="500px">
    
 


## SKELETON:

-----------


### THE CODE:

* * *
Prior to commencing to write my code out, I planned out the ERD.

<img src="src/assets/erd-map.png" width="1000px">

You can find a link to a more in depth database Backend ReadMe [HERE](https://github.com/stephaniecrocker91/djangorestframework-api/blob/main/README.md).


* * * 

## SURFACE:

* * *

### WIREFRAMES:


* * * 

My initiall wireframes for mobile and desktop view. The end result was very similar to this!


HOME LANDING PAGE: (Which will be exat same layoud for: Home, Feed, Likes, Bookmarks. Only difference will be the posts they display.)

Logged in vs Logged out

<img src="src/assets/home-m.png" width="200px">
<img src="src/assets/home-lo.png" width="400px">
<img src="src/assets/home-li.png" width="400px">

PROFILE PAGE:

<img src="src/assets/profile-m.png" width="200px">
<img src="src/assets/profile-d.png" width="400px">

CREATE POST PAGE:

<img src="src/assets/createpost-m.png" width="200px">
<img src="src/assets/createpost-d.png" width="400px">

EDIT POST PAGE:

<img src="src/assets/editpost-m.png" width="200px">
<img src="src/assets/editpost-d.png" width="400px">

EDIT PROFILE PAGE:

<img src="src/assets/editprofile-m.png" width="200px">
<img src="src/assets/editprofile-d.png" width="400px">

UPDATE DETAILS FORMS (change password, username, etc):

<img src="src/assets/update-m.png" width="200px">
<img src="src/assets/update-d.png" width="400px">


* * * 
* * *

### Colors

* * *

* When initially planning this site, I knew I wanted more of a masculine style calling for a deep, rich colour scheme. 
* This would allow for the images to really pop in the app.

<img src="src/assets/color2.png" width="200px">
<img src="src/assets/color1.png" width="200px">
<img src="src/assets/color3.png" width="200px">
<img src="src/assets/color4.png" width="200px">
<img src="src/assets/color5.png" width="200px">



* * * 

### Typography

* * *

Light, spaced, masculine and clean font. 
*  Poppins
*  Use of letter-spacing
*  Use of uppercase




<img src="src/assets/poppins.png" width="500px">
<img src="src/assets/poppins-2.png" width="500px">

### Images and Icons

* * *

Use of a few font-awesome icons for:
* NavBar links
* Like, Bookmark, and comment buttons.
* Dropdown menu for editing/deleting posts
* Dropdown meny for editing profile

<img src="src/assets/navbar.png" width="500px">
<img src="src/assets/dropdown-post.png" width="500px">
<img src="src/assets/like-bookmark-comment.png" width="500px">

Default avatar profile image: which is automatically uploaded when profile is created.

<img src="src/assets/like-bookmark-comment.png" width="500px">

Vectors used for:
* Search feature: when something is not found (page, searched item, or no posts)
* Upload item

<img src="src/assets/magnifying.png" width="500px">
<img src="src/assets/upload-rm.png" width="500px">

Hexedecimal icon for the search bar.

<img src="src/assets/searchbar.png" width="500px">

A couple images for our Sign In and Sign Up pages: create the mood of the site. I purposefully picked images that go with the color scheme of the site: dark, deep, masculine colors.

<img src="src/assets/sign-in.png" width="500px">
<img src="src/assets/sign-up.png" width="500px">



* * * 

FEATURES:
---------

* * *

### Initial Home Page

* * *


*   LANDING PAGE: Without logging in....
    * Navbar: Header title "Instantes", Home, Sign In and SignUp links (containing font awesome icons).
    <img src="src/assets/navbar2.png" width="500px">
    * Posts rendered by all users
    * Search bar where you can search posts by relevant keyword.
    <img src="src/assets/searchbar.png" width="500px">
    * List of most followed profiles

    <img src="src/assets/popularprofiles.png" width="200px">
    
    And in mobile view....

    <img src="src/assets/popularprofilesm.png" width="200px">

    * List of most liked posts

    <img src="src/assets/popularposts.png" width="200px">
    
    And in mobile view...

    <img src="src/assets/popularpostsm.png" width="200px">


*   LANDING PAGE: Once logged in....
    * Only difference is in the Navbar: App name, AddPost, Home, Feed, Liked, Favourite, Sign Out, and Profile link and avatar.
    <img src="src/assets/navbar.png" width="500px">



* * * 



### Individual Post Page

* * *

When user clicks on any Post, the user can view the individual post page which contains...

* NavBar displays with logged in icons/logged out icons. 

<img src="src/assets/navbarblank.png" width="500px">
<img src="src/assets/navbar2.png" width="500px">



* individual post which displays:
    * Post author with avatar by it.
    * Date of post <img src="src/assets/avataranddate.png" width="500px">
    * Image
    * Image title
    * Image description content
    * Links: Like button and count, Bookmark button and count, and Comment fontawesome icon and count <img src="src/assets/details.png" width="500px">

Comment section containing:

If user logged in....
* Avatar
* Input field to add comment 
* POST button to submit form
* Comments displayed below (from most recent)

<img src="src/assets/commentform.png" width="500px">

If not logged in - no form is present! Only Comments subtitle displayed
<img src="src/assets/comments.png" width="500px">

Comments displayed below containing...
* Avatar
* Username
* How long ago it was posted
* If logged in user made this comment: three dots (to allow for edit or deleting comment)
* The comment
<img src="src/assets/individualcomment.png" width="500px">


If clicking edit comment symbol, the following is displayed:
* Avatar
* Username
* Input field with default comment
* Cancel button
* Save button
<img src="src/assets/editcomment.png" width="500px">


  

* * * 

### Sign In Page 

* * *

When user clicks a on Sign In link on navbar:

<img src="src/assets/signin.png" width="500px">


* NavBar displays: App title, Home, Sign In (is in larger font and underlined), and Sign Up link 

    <img src="src/assets/navbar3.png" width="500px">


* Sign In form containing the following:
    * Form title: Sign In.
    * Username
    * Password
    * Sign in Button
    * Link below to Sign Up (in case user has not created a profile yet!)

    <img src="src/assets/signinform.png" width="500px">

    <img src="src/assets/signuplink.png" width="500px">



* Image by the form. This image disappears when using smaller mobile screens.

    <img src="src/assets/signinm.png" width="500px">




### Sign Up Page 

* * *

When user clicks a on Sign Up link on navbar:

<img src="src/assets/signup.png" width="500px">


* NavBar displays: App title, Home, Sign In, and Sign Up (is in larger font and underlined)link .

<img src="src/assets/navbar4.png" width="500px">

* Sign Up form containing the following:
    * Form title: Sign Up.
    * Username
    * Password
    * Confirm password
    * Sign Up Button
    * Link below to Sign Up (in case user already has an account!)

<img src="src/assets/signupform.png" width="500px">


* Image by the form. This image disappears when using smaller mobile screens.

<img src="src/assets/signupm.png" width="500px">


### Feed Page 

* * *

When the logged in user clicks a on the Feed link on navbar:

* NavBar displays with logged in icons as previous: Feed link differently styled so as to stand out.

<img src="src/assets/navbar5.png" width="500px">

* Search field.

<img src="src/assets/searchbar.png" width="500px">

* Listed posts rendered below. Please note these are the posts of followed user only! Each post displays:
    * Post author with avatar by it.
    * Date of post
    * Image
    * Image title
    * Image description content
    * Links: Like button and count, Bookmark button and count, and Comment fontaweson icon and count

    <img src="src/assets/posts.png" width="500px">

* List of most followed profiles

    <img src="src/assets/popularprofiles.png" width="200px">
    
    And in mobile view....

    <img src="src/assets/popularprofilesm.png" width="200px">

    * List of most liked posts

    <img src="src/assets/popularposts.png" width="200px">
    
    And in mobile view...

    <img src="src/assets/popularpostsm.png" width="200px">


* * * 
  
### Bookmarked Page 

* * *

When the logged in user clicks a on the Bookmark link on navbar:

* NavBar displays with logged in icons as previous: Feed link differently styled so as to stand out.

<img src="src/assets/navbar6.png" width="500px">

* Search field.

<img src="src/assets/searchbar.png" width="500px">

* Listed posts rendered below. Please note these are the posts of bookmarked posts only! Each post displays:
    * Post author with avatar by it.
    * Date of post
    * Image
    * Image title
    * Image description content
    * Links: Like button and count, Bookmark button and count, and Comment fontaweson icon and count

    <img src="src/assets/bookmarkedpost.png" width="500px">

* List of most followed profiles

    <img src="src/assets/popularprofiles.png" width="200px">
    
    And in mobile view....

    <img src="src/assets/popularprofilesm.png" width="200px">

    * List of most liked posts

    <img src="src/assets/popularposts.png" width="200px">
    
    And in mobile view...

    <img src="src/assets/popularpostsm.png" width="200px">



<img src="src/assets/bookmarked.png" width="600px">

* * * 


### Profile Page

* * *

When logged in user clicks on Profile in the NavBar, the user can view...

* NavBar displays with logged in icons as previous.

<img src="src/assets/navbarblank.png" width="500px">

* User profile details:
    * Username
    * Avatar
    * Posts Count
    * Followers Count
    * Following Count
    * 3 dots dropdown with option to edit profile, change username, change password, and delete profile????????!!!!!!!!!!!!!%$&*&^£@)
    * Subtitle: Owner's posts

<img src="src/assets/stats.png" width="500px">
<img src="src/assets/threedots.png" width="500px">


* Listed posts of logged in user rendered below. Each post displays the usual:
    * Post author with avatar by it.
    * Date of post
    * Image
    * Image title
    * Image description content
    * Links: Like button and count, Bookmark button and count, and Comment fontaweson icon and count
    * An extra 3 dot dropdown menu to edit or delete the post.

<img src="src/assets/profilefeed.png" width="500px">


* List of most followed profiles

    <img src="src/assets/popularprofiles.png" width="200px">
    
    And in mobile view....

    <img src="src/assets/popularprofilesm.png" width="200px">

* List of most liked posts

    <img src="src/assets/popularposts.png" width="200px">
    
    And in mobile view...

    <img src="src/assets/popularpostsm.png" width="200px">

### Add Post Page

* * *

When logged in user clicks on Add Post in the NavBar, the user can view...

* NavBar displays with logged in icons as previous. Create Post link is styled differently to stand out.

<img src="src/assets/navbar7.png" width="500px">


* Create Post Form including the following fields:
    * Image user can click on to upload image.
    * Title input field
    * Description field
    * Create button
    * Cancel button

<img src="src/assets/createpostform.png" width="500px">
<img src="src/assets/uploadimage.png" width="500px">


* * * 


### Edit Post Page

* * *

When logged in user clicks on three dots above their own post, and the edit symbol, the user can view...

* NavBar displays with logged in icons as previous.

<img src="src/assets/navbarblank.png" width="500px">


* Create Post Form including the following fields with default content:
    * Default Image     
    * Button user can click onto upload new image.
    * Title input field with default text
    * Description field with default text
    * Save button
    * Cancel button

<img src="src/assets/editpostform.png" width="500px">
<img src="src/assets/editimage.png" width="500px">



<img src="src/assets/editpost.png" width="500px">

* * * 


### Edit Profile Page

* * *

<img src="src/assets/threedots.png" width="500px">


When logged in user clicks on the edit icon in 3 dots dropdown in Profile Page, and edit profile, the user can view...

* NavBar displays with logged in icons as previous.

<img src="src/assets/navbarblank.png" width="500px">


* Update Profile Form including the following:
    * Current avatar.
    * Change the image button that user can click to upload new avatar. <img src="src/assets/imagebio.png" width="500px"> 
    * Bio text input field
    * Save button
    * Cancel button <img src="src/assets/bioform.png" width="500px">
  
* * * 

### Edit Username Page

* * *

When logged in user clicks on the edit icon in 3 dots dropdown in Profile Page, and change username, the user can view...

* NavBar displays with logged in icons as previous.

<img src="src/assets/navbarblank.png" width="500px">


* Edit usernmae:
    * Subtite
    * Current username as default, which can be edited
    * Save button
    * Cancel button 
    
    <img src="src/assets/usernameform.png" width="500px">


* * * 

### Edit Password Page

* * *

When logged in user clicks on the edit icon in 3 dots dropdown in Profile Page, and change password, the user can view...

* NavBar displays with logged in icons as previous.

<img src="src/assets/navbarblank.png" width="500px">


* Edit usernmae:
    * Subtite
    * New password input field
    * Confirm new password input field
    * Save button
    * Cancel button 
    
    <img src="src/assets/passwordform.png" width="500px">
  

### Future features

* Allow for videos to be posted, as well as images.
* Most popular posts: allow the like button to be functional (like/unlike), and when clicking the post it will redirect you to the post withing theuse profile. This will allow to see the rets of their work if interested!
* Infinite scroll for profiles box
* Auto-refresh DOM when liking/bookamrking etc. At the moment we have to refresh the page for changes to display.
* I would like to add a message before deleting a post: "Are you sure you wish to delete this post?" This will prevent any accidental deletes.
* I would like to add the option to delete a profile. Again - ensure there are safety measured before confirming deletion!


* * * 

## LANGUAGES:

* * *

*   PYTHON
*   CSS
*   HTML
*   JavaScript


* * * 

## OTHER TECHNOLOGIES, FRAMEWORKS & LIBRARIES:


* * *

*   [REACT](https://reactjs.org/)
*   [REACT-Bootstrap](https://react-bootstrap-v4.netlify.app/)
*   [Django](https://www.djangoproject.com/)
*   [GitHub](https://github.com/)
*   [GitPod](https://www.gitpod.io/)
*   [Heroku](https://id.heroku.com/login)
*   [Stack Overflow](https://stackoverflow.com/)
*   [Code beautify](https://codebeautify.org/html-to-markdown)
*   [Balsamiq](https://balsamiq.com/wireframes/desktop/#)
*   [Pep8](http://pep8online.com/)
*   [Cloudinary](https://cloudinary.com/)
*   [PostgreSQL](https://www.postgresql.org/)
*   [Bootstrap](https://getbootstrap.com/)



* * * 

## TESTING, BUGS & FIXES:


* * *

For testing I used the following sources:

* * * 

### Tests

* * *

#### [Pep8](http://pep8online.com/)

Tested and no errors found.

urls.py
<img src="static/images/test-pep8.png" width="800px">
forms.py
<img src="static/images/test-pep8-2.png" width="800px">
admin.py
<img src="static/images/test-pep8-3.png" width="800px">
apps.py
<img src="static/images/test-pep8-4.png" width="800px">
views.py
<img src="static/images/test-pep8-5.png" width="800px">
models.py
<img src="static/images/test-pep8-6.png" width="800px">
tests.py
<img src="static/images/test-pep8-9.png" width="800px">
asgi.py
<img src="static/images/test-pep8-10.png" width="800px">
settings.py
<img src="static/images/test-pep8-11.png" width="800px">
A couple of long lines, but I am unable to make them any shorter.
urls.py
<img src="static/images/test-pep8-12.png" width="800px">
wsgi.py
<img src="static/images/test-pep8-13.png" width="800px">

#### [HTML VALIDATOR](https://validator.w3.org/)

Tested and no errors found!
<img src="static/images/test-html.png" width="800px">
This was easily solved by changing my alt value to -Image of recipe.


#### [CSS VALIDATOR](https://jigsaw.w3.org/css-validator/)

style.css
NO ERRORS FOUND!
<img src="static/images/style-css.png" width="800px">

summernote.css
NO ERRORS FOUND!
<img src="static/images/style-css2.png" width="800px">




* * *

#### Manual testing 

* * * 

Testing this site manually was a long and very detailed process. No obvious errors were found (except for the obvious).

* * *


HOMEPAGE:

* * *

- Loads properly. No errors or broken links.

<img src="static/images/homescreen.png" width="800px">



* * *

SIGNUP:

* * *

- Signup cannot be submitted without enterring username or password. Email is optional!
<img src="static/images/inputfield1.png" width="800px">
<img src="static/images/inputfield2.png" width="800px">
<img src="static/images/inputfield3.png" width="800px">


* * *

HOMEPAGE...

* * *

-  Logged in and logged out user can view the feed: posts displaying and top posts and profiles being displayed.
- Logged in user can view full navbar/ and logged out user can view sign in/signup icons.
- Asset spinner loads while posts are being fetched. This occurs in all pages where posts or profiles are being loaded.
- Posts render correctly in order of latest post and the infinate scrolling is working as should. This includes ALL posts!


* * *

WHEN SIGNING UP ...

- When attempting to submit the form without fields, using a non-unique username, or entering un-matching password, or unsafe password --> error alerts are displayed, and the form is not submitted.
- Form is submitted when details entered are correct.
- Manually tested and can confirm the API works. 
- Once submitted the user is NOT logged in and is redirected to the Sign in page.


* * *

WHEN SIGNING IN ...

- Form is not submitted and user is not logged in until username and password match exitsing data in database.
- Form cannot be submitted without password
- Error alerts are displayed if password doesnt match or username is invalid.
- Once signe din, user is directed back to Home page. This time the logged in icons are rendered.
-User can move arounf between tabs and the session doesn't time out. User remains logged in until they decide to Sign Out.



* * *

FEED

* * *

- When clicking Feed, only posts belonging to Profiles the user follows are rendered. This has been extensively tested.
- Post are rendered from most recent.
- Infinite scrolling s fully functioning in this page.
- The users posts are NOT displayed in this page.
- When clicking follow/unfollow on one of the Most Followed Profiles on the side, the Feed does NOT automatically refresh. It requires the user to refresh the page. This is something I would like to improve post-submission.

* * *

LIKED PAGES

* * *

- When clicking Likes or Bookmarks, only posts belonging liked by the user are rendered.
- Post are rendered from most recent.
- Infinite scrolling s fully functioning in this page.
- The users posts are NOT displayed in this page.
- When clicking like/unlike on one of the Most Liked Posts on the side, the Liked feed does NOT automatically refresh. It requires the user to refresh the page. This is something I would also like to improve post-submission.

* * *

BOOKMARKED PAGES

* * *

- When clicking Bookmarks, only posts bookmarked by the user are rendered. 
- Post are rendered from most recent.
- Infinite scrolling s fully functioning in this page.
- The users posts are NOT displayed in this page.



* * *

PROFILE

* * *

- When clicking Profile Avatar or Username, the user is redirected to the Profile page. 
- Profile details are correctly displayed including: avatar, username, posts, followers and following. This has been manually checked extensively!
- Infinite scrolling s fully functioning in this page- all posts displayed by the user are loading correctly.
- Again - if clicking on any of the posts like button (displayed on Most Liked posts liked buttons on the side) - the DOM does not automatically update the likes count. However once refreshing the page, this is correctly displayed!
- User can delete or edit any of their posts. This has been manually tested from the back and front end. Both delete and edit functions work as intended.



* * *

PROFILE EDITING FEATURES

* * *

- When clicking thre three dots in the top corner of Profile, the user can choose to edit profile, change username, or change password. All 3 links lead to the correct forms.
- Edit profile allows the user to update their Bio and create an avatar (by uplaoding thei image). The data is correctly stored and the user is correctly redirected to their Profile. The new information is displayed.
- Change username allows the user to update their username which will be saved as new owner and login credentials. The data is correctly stored and the user is correctly redirected to their Profile. If they wanted to sign in again, they would need to use the new username. The old one will no longer work.
- Same here: Change password allows the user to update their passowrd which will be saved as new password and login credentials. The data is correctly stored and the user is correctly redirected to their Profile. If they wanted to sign in again, they would need to use the new password. The old one will no longer work.


* * *

CREATE POST PAGE - CRUD FUNCTIONALITY

* * *

- When clicking Create Post, the logged in user is correctly directed to the Create Post Form page which provides the Create functionality: from the CRUD.
- This option is not possible without logging in.
- Form cannot be submitted without at least a title and an image. Content is optional.
- The image must be under 2MB
- Alert messages are displayed if the requirements are not met, and the form cannot be submitted.
- Users cannot access this feature without logging in!


* * *

EDIT POST PAGE - CRUD FUNCTIONALITY

* * *

- When clicking on the three dots in any post and edit symbol (only owned by logged in user), the logged in user is correctly directed to the Edit Post Form page which provides the Edit functionality: from the CRUD.
- Default post content is displayed.
- Post can be edited or request can be cancelled.
- New image still must be under 2MB
- Again - form cannot be submitted without at least a title and an image. Content is optional. Alert messages will be displayed in these cases.
- Users cannot access this feature without logging in!
- Users cannot edit or delete any post that does not belong to them! 


* * *

DELETE POST PAGE - CRUD FUNCTIONALITY

* * *

- When clicking on the three dots in any post and delete symbol (only owned by logged in user), the logged in user is correctly directed to the Edit Post Form page which provides the Delete functionality: from the CRUD.
- This option is not possible without logging in or owning this post.
- Users cannot access this feature without logging in!
- Users cannot delete any post that does not belong to them! 
- No warning is displayed before deleting the post. I would lie to add a step prior to this: "Are you sure you wish to delete this post?"


* * *

SIGN OUT

* * *

- When clicking on Sign Out (in our navbar), the link works correctly and re-directs us to the original Home Page displaying the logged out navbar links. User will need to log back in if they wish to access their profile.


* * * 


###### BUGS & FIXES: 


1. UNABLE TO SIGN IN/SIGN UP FROM MOBILE DEVICE:
I couldn;t figure out why this was. After speaking to Code Institute tutors, they explained it's a common issue with Apple devices. To resolve it:
    1. Go to settings in safari
    2. Privacy and security 
    3. Disable'Prevent Cross-Site Tracking' 

2. SESSION SIGNING OUT WHEN TESTING LIKE/UNLIKE BUTTON

When testing whether certain users can like/unlike, I noticed that when signing in and then going to my url/posts/1 my session would sign out automatically. I realised this was due to being on Incognito-mode on my browser.

3. THREE DOTS NOT DISPLAYING IN TOP CORNER OF POST

In users posts, the  dropdown menu. MoreDropdown.js was not rendering. This was due to postPage not being passed down to my Post.js Ger from Code institute helped me resolve this issue!

4. DEPLOYMENT FAILING:

 Apparetly Heroku has updated the stack recently, and it's causing a few deployment version-related issues. It kept coming up with th following error.

<img src="static/images/bug.png" width="800px">


 This was resolved by adding the following to my package.json
 {
"engines": {
"node": "16.x"
},
"name": etc..


* * * 

#### Unresolved bug 

* * * 

* The would like to find a solution to the mobile device Sign In/Sign Out bug.
* The like/unike button in the Most liked posts is still not fully functioning. With a bit more time, I am positive I will be able to make this work.

<img src="static/images/category-error.png" width="1000px">
<img src="static/images/category.png" width="8000px">

* When bookmarking/liking a post - the DOm doesnt refresh automatially in other components (for example: most liked posts, or if I have my likes feed open and I like a most liked post it doesn't appear immediately). It required refreshing the page for it to display. I would like to fix this issue!


* * * 

#### Testing User Stories 

* * * 

NAVIGATION & AUTHENTICATION
1. Navigation: As a user I can view the navbar from every page so that I can navigate between pages  easily.

Yes - the navbar is displayed clearly across all pages and on all screens. When on mobile devices, the dropdown menu button is clear and the dropdown icons are easily accessible.

2. Routing: As a user I can navigate through pages quickly and easily so that I can view the content without having to refresh the page.

Yes - as a user I can navigate eaisly without having to refresh the page. The only thing I haven't been able to resolve, is the instant update of feed when bookmarking or liking. It required refreshing the DOM to fully display all new data.


3. Authentication - Sign up: As a user I can create a profile so that I can access all the features available for signed up users.

Yes - users can create their own profile and access all features.

4. Authentication - Sign in: As a user I can sign in to the app so that I can access all the functionality available for logged in users.

Yes - users can then sign in to the app to access all functionality available for logged in users.

5. Authentication - Logged in Status: As a user can easily tell if I am logged in or not.

Yes - the navbar clearly displays wether the user is logged in or not. When logged in, the user has extra features and can view their own avatar and username.

6. Authentication - Refreshing access tokens: As a user I am able to remain logged in until I decide to log-out so that my experience as a user is enjoyable.

Yes - users can remain logged in until they log out.

7. Navigation: Conditional rendering - As a logged out user I can clearly see sign in and sign up options so that I can easily sign in or sign up if I want to.

Yes - the navbar and conditional rendering of navbar icons allows the user to easily know wether they are logged in or not. If logged out: sign in and sign up options are available. if logged in, all features available in navbar.

8. Avatar: As a user I can view user's  images so that I can easily identify each user.

Yes - users can view the profiles avatar. This would be the images the user selected, or the default avatar.

ADDING, LIKING AND BOOKMARKING POSTS:
9. Create posts: As a logged in user I can create posts so that I can share my images with anyone who has access to this app.

Yes - logged in users can create their own posts, as many as they like!

10. View a post: As a user I can view the details of a post so that I can know more about it.

Yes - all users can view all details about every post: likes, bookmarks, comments, title, content, image, owner.

11. Like a post: As a logged in user I can manually like a post so that I can show the comunity what I like.

Yes - logged in users can like a post by clicking on the heart icon below the post!

12. Bookmark a post: As a logged in user I can manually bookmark a post so that I can save what I like what I like.

Yes - logged in users can bookmark a post by clicking on the bookmark icon below the post!

THE POSTS PAGE:
1. View most recent posts: As a user I can view posts ordered by most recently created first, so that I don't miss any new content.

Yes - users can view all posts, and they are ordered by most recent.

2. As a user, I can search for posts using keywords, so that I can find the content I am most interested in.

Yes - users can input a searchword and the related posts will pop up. if not posts match the keyword, then "No matches found" message will appear.

3. View bookmarked posts: As a logged in user save posts I liked so that I can easily view them again and again!

Yes - logged in users will be able to view all bookmarked posts under the bookmarks tab.

4. View posts of followed users: As a logged in user I can follow users so I can filter the content I view and keep up with their posting.

Yes - logged in users may view the posts of their followed profiles, when clicking on FEED.

5. Infinite scroll: As a user I can infinately scroll through posts, so that I don't have to click on "next page" etc

Yes - users (logged-in and logged-out) can view posts by scrolling down, withoiut having to refresh or change the page.

The Post Page
1. Post page: As a user I can view individual posts page so that I can read the post comments.

Yes - users can view all posts inividually and see what the comments are. Only logged in users can comment.

2. Edit post: As a post owner I can edit my post title, content and image so that I can correct or change my post once created.

Yes - only post owners have CRUD functionality of their posts- at any time.

3. Create a comment: As a logged in user I can comment a post so that I can express my opinions it and interact with people.

Yes - all logged in users can comment on any post at any time.

4. Comment date: As a user I can see how long ago a comment was made so that I know when this was written.

Yes - all users can view how long ago the post was published.

5. View comments: As a user I can view post comments so that I can see what others think about this post.

Yes - all users can view comment posted by other users.

6. Delete comments: As the owner of a comment I can delete my comment so that I have control over my discussions in the forum.

Yes - comment owners are able to delete their comment at any time!

7. Edit a comment: As the owner of a comment I can edit my comment so that I update it if wanted.

Yes - comment oweners are able to edit their comment at any time!

8. Most popular posts: As a user I can see a list of the most liked posts so that I can see which ones are the most popular ones.

Yes - all users can view the post popular posts (displayed below Most Followed Profiles). They can view this logged in our out.

The Profile Page
1. Profile page: As a user I can view other users profiles so that I can view their content and potentially intercat with them.

Yes - users can easily view other peoples profiles by clicking on the user avatar. 

2. Most followed profiles: As a user I can see a list of the most followed profiles so that I can see which ones are the most popular ones.

Yes - users (logged in and logged out) can view most followed profiles eaisly. This is displayed on most feed/content pages.

3. User profile - user stats: As a user I can view the stats about a user including bio, number of posts, follows, bookmarks and users followed so that I can know more about the profile.

Yes - users can eaisly view other people and their own stats. This is displayed in the user profile- and is visible to logged in and logged out users.

4. Follow/Unfollow a user: As a logged in user I can follow or unfollow users so that I can filter the posts I want in my feed.

Yes - all logged in users can choose to follow/unfollow another profile at any time. This is easily done by clicking the follow/unfollow button.

5. View all posts by a specific user: As a user I can view all the posts created by one specific user so that I can view their content and see if I would like to follow them or not.

Yes - as user I can view another users content eaisly by clicking on their profile. This displays their stats, as well as all of their posts!

6. Edit profile: As a logged in user I can edit my profile so that I can update and change it when I like, to best express myself.

Yes - as a logged in user, I can eaisly update my profile as I please. I can update: username, password, bio and avatar.

7. Update username and password: As a logged in user I can update my username and password so that I can change my display name whenever I like and always keep my profile safe.

Yes - as a logged in user, I can do this at any time. Simply click on profile, three dots, and update username or update password.


* * *

## DEPLOYMENT:

* * *

### Forking The GitHub Repository

* * *

You can Fork the Repository. This makes a copy of the original repository on our Github account so you can make changes without affecting the original repository.
1. Log into GitHub and locate the GitHub repository you want.
2. Click on the "Fork" button which is located in the top right corner.
3. You will now have a copy of the original repository in your GitHub account.

* * * 

### Cloning the Project.
* * *
1. Log into GitHub and locate the GitHub repository you want.
2. Under the repository name, click "Code" button which will come up with a dropdown menu.
3. Where it says Clone, copy the link below.

* * * 


### SETTING UP DJANGO PROJECT & DEPLOYMENT

* * *
#### SETTING UP THE DJANGO PROJECT...

_In GITHUB:_

 Once the repository has been created using the Code Institute student template....

1. Install Django and supporting libraries. 
    * Django and gunicorn --> pip3 install 'django<4' gunicorn
    * Supporting libraries --> pip3 install dj_database_url psycopg2
    * Cloudinary libraries --> pip3 install dj3-cloudinary-storage

2. Create a requirements file --> pip3 freeze --local > requirements.txt

3. Create your project: in this case for-the-love-of-food

4. Create an app using command --> python3 manage.py startapp APP_NAME

5. Add it to installed apps --> INSTALLED_APPS = [
    …
    'APP_NAME',
]

6. Save file and migrate changes using command --> python3 manage.py migrate

7. Run server to test

8. Commit and push changes to github

#### DEPLOYING THE APP TO HEROKU...

1. Create Heroku Account
2. In Heroku dashboard: go to Create new app.
3. Give your app a unique name.
4. Select region --> EUROPE
5. Click create App.
6. Go to Database App/Resources/ Add-ons and search and click 'Heroku Postgres'.
7. Go to the Settings tab, scroll down to Config Vars and select Reveal Config Vars and copy text.


_IN GITPOD..._


8. Create env.py file on top of level directory.
9. Import os library
10. set environment variables --> os.environ["DATABASE_URL"] = "Paste in Heroku DATABASE_URL Link"
11. Add in a secret key --> os.environ["SECRET_KEY"] = "Make up your own randomSecretKey"


_IN HEROKU ..._


12. Add secret Key to config vars --> SECRET_KEY, “randomSecretKey”


_IN GITPOD / IN SETTINGS.PY_


13. Reference env.py file -->
import os
import dj_database_url

if os.path.isfile("env.py"):
   import env

14. Remove the secret key and replace it with the following variable--> SECRET_KEY = os.environ.get('SECRET_KEY')


15. Comment out the DataBases section -->
 DATABASES = {
     'default': {
         'ENGINE': 'django.db.backends.sqlite3',
         'NAME': BASE_DIR / 'db.sqlite3',
     }
 }

 16. Add new database section -->
 DATABASES = {
   'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))
}

17. In the terminal, save files and make migrations --> python3 manage.py migrate


_GETTING STATIC AND MEDIA FILES STORED ON CLOUDINARY..._


18. Create a cloudinary account, and copy the CLOUDINARY_URL from the dashboard.

19. Add url to env.py -->
os.environ["CLOUDINARY_URL"] = "cloudinary://************************"


_BACK IN HEROKU ..._


20. Paste Cloudinary URL to Heroku Config Vars -->
Add to Settings tab in Config Vars e.g. COUDINARY_URL, cloudinary://************************

21. In config vars, add DISABLE_COLLECTSTATIC, 1. This will be rmeoved before final deployment.


_IN GITPOD / SETTINGS.PY_


22. Install Cloudinary libraries -->
INSTALLED_APPS = [
    …,
    'cloudinary_storage',
    'cloudinary',
    …,
]

23. Tell Django to use Cloudinary to store media and static files -->
STATIC_URL = '/static/'

STATICFILES_STORAGE = 'cloudinary_storage.storage.StaticHashedCloudinaryStorage'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

MEDIA_URL = '/media/'
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

23. Link file to templates -->
TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')

24. Change template directory to templates array -->
TEMPLATES = [
    {
        …,
        'DIRS': [TEMPLATES_DIR],
       …,
            ],
        },
    },
]

25. Add heroku hostname to ALLOWED_HOSTS-->
ALLOWED_HOSTS = ["PROJ_NAME.herokuapp.com", "localhost"]


_IN GITPOD..._


26. Create 3 new folders: media, static and templates

27. Create procfile and add code -->
web: gunicorn PROJ_NAME.wsgi

28. In terminal --> Add, Commit and Push

_IN HEROKU ..._

29. Deploy manually -->  Github as deployment method, on main branch



#### FINAL PRODUCTION DEPLOYMENT..

_IN GITPOD / SETTINGS.PY_

1. Set DEBUG flag to False!! If not...
    * Django will serve the static  files such as css files itself, instead of relying on Cloudinary.
    * Django will continue to give us verbose error pages which can reveal credentials, and things you want to keeo secret. This will compromise your site!
2. Add a few more settings--> X_FRAME_OPTIONS = 'SAMEORIGIN'
    * Without this our summer note editor would no  longer work when we deploy the project. This is due to Cross-Origin Resource Sharing, which tells the browser which resources are permitted to be loaded.
3. Save, add and commit as "deployment commit", and push to github.


_IN HEROKU..._


4. In reveal config vars, remove DISABLE_COLLECTSTATIC environment variable.

5. Go to deploy tab, scroll down to the end and deplopy our branch! 

6. Your app has been deployed to heroku!



### Forking The GitHub Repository

* * *

You can Fork the Repository. This makes a copy of the original repository on our Github account so you can make changes without affecting the original repository.
1. Log into GitHub and locate the GitHub repository you want.
2. Click on the "Fork" button which is located in the top right corner.
3. You will now have a copy of the original repository in your GitHub account.

* * * 

### Cloning the Project.
* * *
1. Log into GitHub and locate the GitHub repository you want.
2. Under the repository name, click "Code" button which will come up with a dropdown menu.
3. Where it says Clone, copy the link below.

* * * 


[Link to deployed site](https://for-the-love-of-food1.herokuapp.com/)

* * *


CREDITS: 
--------

* * *

### Content & Code

This project was extremely challengin for me. I used several resources to get me to the finish line, as well as the help of tutors, my mentor and fellow students at Code Institute.

* I used the "Moments" walk through project as a starting point and template. As per this walkthrough projects, I created a blog like page that stored images. I used some snippets of code as reference, and built upon it with more features. (Such as favourites view, most popular posts and some delete functions).
* Code Institute Tutors we always so helpful! Ed, Oisin, Alan, Ger and Tom! They helped me troubleshoot most of the issue's displayed in my bugs section. Thank you!!






       




