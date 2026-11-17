import { render, screen } from '@testing-library/react';
import fs from 'fs';
import path from 'path';
import App from './App';

test('presents Melvin Ani, Fremont, and resume facts', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: 'Melvin Ani' })).toBeInTheDocument();
  expect(screen.getByText('Account Manager, Cybersecurity Sales')).toBeInTheDocument();
  expect(screen.getAllByText('Fremont, CA').length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: 'Account Manager, Inside Sales (full-cycle closing)' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Business Development Representative' })).toBeInTheDocument();
  expect(screen.getByText('University of Texas at San Antonio')).toBeInTheDocument();
  expect(screen.getAllByText('125%').length).toBeGreaterThan(0);
  expect(screen.getAllByText('129%').length).toBeGreaterThan(0);

  const resume = screen.getAllByRole('link', { name: 'Resume' })[0];
  expect(resume).toHaveAttribute('href', expect.stringMatching(/Melvin_Ani_Resume\.pdf$/));
  expect(resume).toHaveAttribute('download', 'Melvin_Ani_Resume.pdf');

  expect(screen.getAllByRole('link', { name: 'LinkedIn' })[0]).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/melvin-ani-6285a010a'
  );

  const text = document.body.textContent;
  expect(text).not.toMatch(/Richmond/i);
  expect(text).not.toMatch(/510/);
  expect(text).not.toMatch(/299-3118/);
});

test('ships the cybersecurity resume and headshot', () => {
  const pdf = path.join(__dirname, '../public/Melvin_Ani_Resume.pdf');
  const photo = path.join(__dirname, '../public/images/melvin-ani.jpg');
  expect(fs.existsSync(pdf)).toBe(true);
  expect(fs.statSync(pdf).size).toBeGreaterThan(1000);
  expect(fs.existsSync(photo)).toBe(true);
  expect(fs.statSync(photo).size).toBeGreaterThan(1000);
});
