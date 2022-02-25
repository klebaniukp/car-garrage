import express from 'express';
import { warehousesController } from '../controllers/warehouses';

export const warehouseRouter = express.Router();

warehouseRouter.use(express.json());

warehouseRouter.get('/warehouses', warehousesController);
