import Image from 'next/image'

export default function ExpandedCard() {

  return (
      <div class="flex-col rounded-lg p-8 mt-40 mx-32 bg-gray-200 shadow text-left">
          <h1>X</h1>
          <div class="flex">
            <div class="flex-col">
              <h1>Program -  City</h1>
              <h2>School of </h2>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor iaculis maximus. Curabitur vestibulum scelerisque ex, eu laoreet neque euismod non. Nullam sodales finibus sollicitudin. Aenean pretium neque fermentum tempus vehicula. In hac habitasse platea dictumst. Aenean porta eget orci a elementum. Integer dignissim augue non semper pulvinar. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at laoreet leo. Integer convallis faucibus rutrum. Donec quis orci ut nisl vulputate finibus eget sed elit. Fusce mollis hendrerit aliquet. Vestibulum pretium libero quis efficitur malesuada. Donec facilisis ullamcorper libero at scelerisque. In mattis enim sit amet dolor interdum molestie.
              </p>
            </div>
            <div class="ml-10">
              <h1>Radar Graph Placeholder</h1>
              <Image src="/radar_graph.png" width="2000" height="1400"/>
            </div>
          </div>
          
      </div>
  )

}