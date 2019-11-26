import { Router } from 'express';

import MentorController from './app/controllers/MentorController';
import SchoolController from './app/controllers/SchoolController';
import WorkshopController from './app/controllers/WorkshopController';
import WorkshopAllController from './app/controllers/WorkshopAllController';
import StudentController from './app/controllers/StudentController';
import ClassMentorController from './app/controllers/ClassMentorController';

const routes = new Router();

routes.get('/mentors', MentorController.index);
routes.post('/mentors', MentorController.store);

routes.get('/schools', SchoolController.index);
routes.post('/schools', SchoolController.store);

routes.get('/workshops', WorkshopAllController.index);

routes.get('/workshops/:mentor_id', WorkshopController.index);
routes.post('/workshops', WorkshopController.store);

routes.get('/students/:school_id', StudentController.index);
routes.post('/students', StudentController.store);

routes.get('/class/:mentor_id', ClassMentorController.index);
routes.post('/class/:mentor_id', ClassMentorController.store);

export default routes;
