import MeetupList from '../components/meetups/MeetupList';
import image from '../public/hongkong.jpg';

export const DUMMY_MEETUPS = [
  {
    id: "m1",
    image: image,
    title: "A first meetup",
    address: "some street 145, Abuja",
  },
  {
    id: "m2",
    image: image,
    title: "A second meetup",
    address: "some street 145, lagos",
  },
];

const HomePage = (props) => {

  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an api
//   // connect to a database

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async (context) => {
  // connect to a database
  // fetch data from an api

  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  };
}

export default HomePage;