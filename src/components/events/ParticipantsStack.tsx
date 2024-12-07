import React from 'react';
import { User } from '../../utils/types';

interface ParticipantsStackProps {
  rsvp: User[]; // List of RSVP'd users
  onClick: () => void; // Callback when the stack is clicked
}

const ParticipantsStack: React.FC<ParticipantsStackProps> = ({ rsvp, onClick }) => {
  const displayedParticipants = rsvp.slice(0, 4);
  const remainingCount = rsvp.length - displayedParticipants.length;

  if (!rsvp || rsvp.length === 0) {
    return <div></div>;
  }

  return (
    <div
      onClick={onClick} // Make the entire stack clickable
      className="relative flex items-center cursor-pointer transition-transform hover:scale-105"
    >
      {displayedParticipants.map((user, index) => (
        <img
          key={user.id}
          src={user.profilePicUrl}
          alt={user.fullName}
          onError={(e) => (e.currentTarget.src = '/placeholder.png')} // Fallback image
          aria-label={`Participant: ${user.fullName}`}
          className="h-12 w-12 rounded-full border-2 border-white"
          style={{
            zIndex: displayedParticipants.length - index, // Stack order
            marginLeft: index > 0 ? '-16px' : '0px', // Overlapping effect
          }}
        />
      ))}
      {remainingCount > 0 && (
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gray-300 text-gray-700"
          style={{ marginLeft: '-16px' }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default ParticipantsStack;
