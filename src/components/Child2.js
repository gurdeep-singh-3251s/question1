import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Child2 = ({ decrementMoney }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">Child2 Component</Typography>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Button variant="contained" color="secondary" onClick={decrementMoney}>
          Decrement by 500
        </Button>
      </motion.div>
    </Paper>
  );
};

export default Child2;
