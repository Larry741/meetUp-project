import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const newMeetup = () => {
  const addMeetup = (meetupData) => {

  }

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </>
  );
};

export default newMeetup;
