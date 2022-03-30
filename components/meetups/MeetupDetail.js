import Image from 'next/image';
import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {

  return (
    <section className={classes.detail}>
      <Image src={props.src} alt={props.title} layout='responsive' width={700} height={400} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;