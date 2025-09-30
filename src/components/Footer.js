import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        &copy; {new Date().getFullYear()} EngineSpares. All Rights Reserved.
      </Container>
    </footer>
  );
}
