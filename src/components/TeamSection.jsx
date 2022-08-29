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
    heading: "Name 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: 2,
    img: Team02,
    heading: "Name 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: 3,
    img: Team03,
    heading: "Name 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: 4,
    img: Team04,
    heading: "Name 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: 5,
    img: Team05,
    heading: "Name 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: 6,
    img: Team01,
    heading: "Name 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
]

const TeamSection = () => {
  return (
    <section className="w-full text-white pb-32 lg:max-w-[1400px] px-4 mx-auto">
      <h1 className="font-heading text-4xl lg:text-6xl py-6 font-bold uppercase">Meet The Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          teamData.map(team => (
            <TeamMember
              key={team.id}
              img={team.img}
              heading={team.heading}
              description={team.description}
            />
          ))
        }
      </div>

    </section>
  )
}

export default TeamSection