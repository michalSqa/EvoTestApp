There are problems with used chart library, the bower distribution is old.

for problems go: https://jtblin.github.io/angular-chart.js/ to help with bower install.

And for the proper compilation u should change main file path in chart.js/bower.js to point to dist/Chart.js. At least that worked for me.

for grunt test errors, install:
npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev


Brief description:
I could really describe all the problem i had, but it would be just poking myself.
Due to all the thing i started late with this task. I had a time to fiddle with some chart libs.
I decided on Angular, first of all because I didnt write in 1.x in a while, and i thouhgt it would be EZ.
Used Yoeman generator for basic project, and setup (see 'grunt test errors').
Well on one hand it was fun. But most problems came from chart drawing lib I used, which is a wrapper (not that good), for JS lib chart.js.
I did a 'backendless approach', mocked http requests in seperate file. Its flexible and You can develope fast (unless u change the model).

