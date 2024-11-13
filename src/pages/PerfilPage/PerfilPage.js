import React, { useState } from 'react';
import './PerfilPage.css';
import Navbar from '../../components/NavBar/NavBar';

const ProfilePage = ({ setUserLoggedIn }) => {
  const [name, setName] = useState('João');
  const [bio, setBio] = useState('Apaixonado por tecnologia e desenvolvimento!');
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div className="profile-page">
      <Navbar setUserLoggedIn={setUserLoggedIn} />
      <div className="profile-content">
        <h2>Seu Perfil</h2>
        {editing ? (
          <div>
            <div>
              <label>Nome:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Bio:</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <button onClick={handleSave}>Salvar</button>
          </div>
        ) : (
          <div>
            <p><strong>Nome:</strong> {name}</p>
            <p><strong>Bio:</strong> {bio}</p>
            <button onClick={() => setEditing(true)}>Editar Perfil</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;