import express, {Request, Response} from 'express';
import orderService from '../service/order.service';
import { CreateUserSQL, UserSQLUnique } from '../types/types';
