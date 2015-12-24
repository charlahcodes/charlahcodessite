import angular from 'angular';
import 'angular-ui-router';
import jquery from 'jquery';
import configFunct from './config';

import RootController from './controllers/root.controller';
import ResumeController from './controllers/resume.controller';

import AddPhotoController from './controllers/addphoto.controller';
import SingleController from './controllers/single.controller';
import ListController from './controllers/list.controller';
import EditController from './controllers/edit.controller';
import PhotosService from './services/photos.service';


angular
  .module('app', ['ui.router'])
  .config(configFunct)
  .controller('ListController', ListController)
  .controller('AddPhotoController', AddPhotoController)
  .controller('SingleController', SingleController)
  .controller('EditController', EditController)
  .controller('ResumeController', ResumeController)
  .controller('RootController', RootController)

  .service('PhotosService', PhotosService)
  ;






