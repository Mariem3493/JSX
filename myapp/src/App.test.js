/*importation des éléments render et screen de la bibliothèque testing-library react*/
import { render, screen } from '@testing-library/react';
/*importation du composant App*/
import App from './App';
/*Fonction test de vérification si le rendu de la fonction App fonctionne correctement*/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
