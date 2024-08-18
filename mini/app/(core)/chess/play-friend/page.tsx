'use client';
import React, { useEffect, useState } from 'react';
import { MdScoreboard } from 'react-icons/md';
import { TextH, Navbar, ChessGame, ModalWrapper } from '@/comps';

export default function PlayFriendPage() {
  const [inviteFriend, setInviteFriend] = useState(false);

  useEffect(() => {
    setInviteFriend(true);
    return () => {};
  }, []);

  return (
    <div>
      <Navbar title={'Friends Play'} icon={MdScoreboard} onIconClick={() => {}} isBack />
      <ModalWrapper>
        <div>He</div>
      </ModalWrapper>
      <ChessGame />
    </div>
  );
}
