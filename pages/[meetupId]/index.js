import MeetupDetail from "../../components/meetups/MeetupDetail";
import {DUMMY_MEETUPS } from '../index';

const meetupId = ({ meetups }) => {
  return (
    <MeetupDetail
      src={meetups.image}
      title={meetups.title}
      address={meetups.address}
      description="This is a first meetup"
    />
  );
};

export const getStaticPaths = () => {

  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const meetup = DUMMY_MEETUPS.find((meetup) => {
    return meetup.id == meetupId;
  });
  // connect to a database
  // fetch data from an api
  
  return {
    props: {meetups: meetup},
    revalidate: 10,
  };
};

export default meetupId;