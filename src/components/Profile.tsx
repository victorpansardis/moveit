import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const { level }= useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/378800000793909784/c2e0f815a55c78850b39feeb77380b07_400x400.jpeg" alt="Victor"/>
            <div>
                <strong>Victor Pansardis</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}