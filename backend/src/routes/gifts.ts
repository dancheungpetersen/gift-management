import { Router } from 'express';

const router = Router();

// Mock gift data
const gifts = [
  { id: 1, name: "Teddy Bear", description: "Soft toy", qty: 10, type: "normal", photo: "https://dummyimage.com/300" },
  { id: 2, name: "VIP Watch", description: "Luxury watch", qty: 2, type: "vip", photo: "https://dummyimage.com/300" }
];

// GET /api/gifts
router.get('/', (req, res) => {
  res.json(gifts);
});

export default router;
