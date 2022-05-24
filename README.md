News App Using React with newsapi.org

This project is for fulfilling the final project 1 of Studi Independent by Hacktiv8 Kampus Merdeka.

Project Status: Completed

Update 24/5/2022:

Create a new branch for deployment purpose called "with-dummy-data" since I couldn't deploy with still connecting to NewsAPI (got limitation). Please go to with-dummy-data to see the example of news structure after fetching from NewsAPI.

here's the Live Website url: https://stirring-profiterole-04874b.netlify.app/

Things to note:

- The displayed news for each navigation just the same even though in the real case (using fetch from NewsAPI directly), it wouldn't be like that.
- The Search function over in the Live Website can't be used since the function is to search with fetching from the NewsAPI, not through the local storage which in this case the redux itself (that contain the dummy data.)

//

if you want to see the original version of this project, please go to master branch, view commits, and look at Search App v1.0. I was making a mistake by accepting the pull request from with-dummy-data branch.
