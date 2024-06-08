import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Child1 = ({ incrementMoney }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">Child1 Component</Typography>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Button variant="contained" color="primary" onClick={incrementMoney}>
          Increment by 1000
        </Button>
      </motion.div>
    </Paper>
  );
};

export default Child1;
