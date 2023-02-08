import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ListMovies = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  width: 1460px;
  justify-content: center;
  padding: 0;
`;

const ListItemMovie = styled.li`
  border: 1px solid black;
  overflow: hidden;
  border-radius: 5%;
  text-align: center;
`;

const PosterMovie = styled.img`
  display: block;
  width: 300px;
  min-height: 450px;
`;

const TitleMovie = styled.p`
  margin: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 600;
`;
const LinkDiv = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export { ListMovies, ListItemMovie, PosterMovie, TitleMovie, LinkDiv };
