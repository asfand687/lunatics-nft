import Accordion from '../components/Accordion'
import Marker1 from '../assets/marker-001.svg'
import Marker2 from '../assets/marker-002.svg'
import Marker3 from '../assets/marker-003.svg'
import Marker4 from '../assets/marker-004.svg'
import Marker5 from '../assets/marker-005.svg'
import Marker6 from '../assets/marker-006.svg'
import Marker7 from '../assets/marker-007.svg'
import Marker8 from '../assets/marker-008.svg'
import Marker9 from '../assets/marker-009.svg'
import Navbar from '../components/Navbar'

const faqData = [
  {
    id: "01",
    title: "Question 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.",
    open: true,
    marker: Marker1
  },
  {
    id: "02",
    title: "Question 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.",
    marker: Marker2
  },
  {
    id: "03",
    title: "Question 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.",
    marker: Marker3
  },
  {
    id: "04",
    title: "Question 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.",
    marker: Marker4
  },
  {
    id: "05",
    title: "Question 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.",
    marker: Marker5
  },
  {
    id: "06",
    title: "Question 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.",
    marker: Marker6
  },
  {
    id: "07",
    title: "Question 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.",
    marker: Marker7
  },
  {
    id: "08",
    title: "Question 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.",
    marker: Marker8
  },
  {
    id: "09",
    title: "Question 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.",
    marker: Marker9
  },
]

const Faq = () => {

  return (
    <>
      <Navbar classes="w-full py-4 bg-[#0300AD]" />
      <div className="w-full pt-16 pb-32 lg:max-w-[1300px] 2xl:max-w-full px-4 lg:px-8 mx-auto">
        {
          faqData.map(faq => (
            <Accordion key={faq.id} faq={faq} />
          ))
        }
      </div>
    </>
  )
}

export default Faq