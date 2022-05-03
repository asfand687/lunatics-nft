import React from 'react'
import Team01 from '../assets/team-001.svg'
import Team02 from '../assets/team-002.svg'
import Team03 from '../assets/team-003.svg'
import Team04 from '../assets/team-004.svg'
import Team05 from '../assets/team-005.svg'
import TeamMember from './TeamMember'

const teamData = [
  {
    id: 1,
    img: Team01,
    heading: "Team Member One",
    reverse: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: 2,
    img: Team02,
    heading: "Team Member Two",
    reverse: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: 3,
    img: Team03,
    heading: "Team Member Three",
    reverse: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: 4,
    img: Team04,
    heading: "Team Member Four",
    reverse: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: 5,
    img: Team05,
    heading: "Team Member Four",
    reverse: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  }
]

const TeamSection = () => {
  return (
    <section className="w-full space-y-24 pt-16 pb-32 lg:max-w-[1300px] 2xl:max-w-full 2xl:mx-[3%] px-4 lg:px-8 mx-auto">
      {
        teamData.map(team => (
          <TeamMember
            key={team.id}
            img={team.img}
            heading={team.heading}
            reverse={team.reverse}
            description={team.description}
          />
        ))
      }

    </section>
  )
}

export default TeamSection