import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';

const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life and be without flavor. - Eleanor Roosevelt",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
  "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "Whoever is happy will make others happy too. - Anne Frank",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Everything you've ever wanted is on the other side of fear. - George Addair",
];

const App = () => {
  const [quote, setQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Greatest Quotes of all time
      </Typography>
      <Button variant="contained" onClick={generateRandomQuote}>
        Generate Quote
      </Button>
      <Typography variant="body1" sx={{ marginTop: '2rem' }}>
        {quote}
      </Typography>
    </Container>
  );
};

export default App;