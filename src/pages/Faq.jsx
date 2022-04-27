import Accordion from '../components/Accordion'

const faqData = [
  {
    id: "01",
    title: "Question 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada.",
    open: true
  },
  {
    id: "02",
    title: "Question 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: "03",
    title: "Question 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: "04",
    title: "Question 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: "05",
    title: "Question 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: "06",
    title: "Question 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: "07",
    title: "Question 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: "08",
    title: "Question 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
  {
    id: "09",
    title: "Question 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eget elementum arcu, purus in at. Tellus sed feugiat enim, eget porta est dui. Vel in sit arcu nec quis eu. Amet lacus, ornare massa et orci. Morbi blandit diam nisl tempor rhoncus elit malesuada."
  },
]

const Faq = () => {

  return (
    <div className="w-full pt-16 pb-32 max-w-[1300px] px-4 lg:px-8 mx-auto">
      {
        faqData.map(faq => (
          <Accordion key={faq.id} faq={faq} />
        ))
      }
    </div>
  )
}

export default Faq