There are problems with used chart library, the bower distribution is old.

for problems go: https://jtblin.github.io/angular-chart.js/ to help with bower install.

And for the proper compilation u should change main file path in chart.js/bower.js to point to dist/Chart.js. At least that worked for me.

*
for grunt test errors, install:
npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev


Brief description:
I could really describe all the problem I had, but it would be just pointing myself.
Due to all the thing i started late with this task. 
I decided on Angular, first of all because I didnt write in 1.x in a while, and i thouhgt it would be EZ.
And i could use Yoeman generator for basic project, and setup (see 'grunt test errors').
Since i spend few hours with libraries for charts, i decided to use the one that 'didnt work at first'. 
Because it had best documentation (original chart.js). But it's just a wrapper, not that good I think.
And caused few problems here and there. And in the end I didnt skin charts as they should be skinned.
I did a 'backendless approach', mocked http requests in seperate file. Its flexible and You can develope fast (unless u change the model).
