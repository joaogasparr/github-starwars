import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import api from '~/services/api';

import organization from '~/assets/organization.svg';
import location from '~/assets/location.svg';
import star from '~/assets/star.svg';
import repositorie from '~/assets/repositorie.svg';
import followers from '~/assets/followers.svg';

import Title from '~/components/Title';
import TextInput from '~/components/TextInput';

import {
  Container,
  Header,
  Info,
  Profile,
  ProfileList,
  Scroll,
  RepoList,
  Repository,
  Content,
} from './styles';

export default function Result() {
  const [profile, setProfile] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);

  const user = useParams();

  useEffect(() => {
    async function loadGitHub() {
      try {
        const [perfil, repo] = await Promise.all([
          api.get(`/users/${user.user}`),
          api.get(`/users/${user.user}/repos`),
        ]);

        setProfile(perfil.data);
        setRepositories(repo.data);
      } catch (err) {
        setError(err.response.data.message);
      }
    }

    loadGitHub();
  }, [error, user]);

  return (
    <Container>
      <Header>
        <Link to="/">
          <Title />
        </Link>
        <TextInput />
      </Header>
      {error ? (
        <Content>
          <strong>User not found :(</strong>
        </Content>
      ) : (
        <Info>
          <Profile>
            <img src={profile.avatar_url} alt={profile.login} />
            <strong>{profile.name}</strong>
            <span>{profile.login}</span>

            <ProfileList>
              <li>
                <img src={organization} alt="Organization" />
                {profile.company}
              </li>
              <li>
                <img src={location} alt="Location" />
                {profile.location}
              </li>
              <li>
                <img src={star} alt="Star" />
                {profile.public_gists}
              </li>
              <li>
                <img src={repositorie} alt="Repositorie" />
                {profile.public_repos}
              </li>
              <li>
                <img src={followers} alt="Followers" />
                {profile.followers}
              </li>
            </ProfileList>
          </Profile>
          <Repository>
            <Scroll>
              <RepoList>
                {repositories.map(repo => (
                  <li key={repo.id}>
                    {repo.name}
                    <small>{repo.description}</small>
                    <div>
                      <img src={star} alt="Star" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  </li>
                ))}
              </RepoList>
            </Scroll>
          </Repository>
        </Info>
      )}
    </Container>
  );
}
