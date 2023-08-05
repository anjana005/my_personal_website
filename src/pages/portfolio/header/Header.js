export default function Header(jsonData) {
    const imageUrl = jsonData["data"]["image"];
    const title = jsonData["data"]["title"];
    const position = jsonData["data"]["position"];
    const shortIntro = jsonData["data"]["shortIntro"];
    return (
        <>
            <div className="bg-black h-60 w-full">
                <div class="grid grid-cols-2 h-full w-1/2">
                    <div className="border border-gray-700 mr-4 ml-4 w-1/4"></div>
                    <div className="border border-gray-700 mr-4 ml-4 w-1/8"></div>
                </div>
                <div className="flex justify-center">
                    <div className="border-8 border-gray-200 h-96 w-64 rounded-md absolute top-16">
                        <div className="flex justify-center">
                            <img className="rounded-md filter grayscale contrast-50 pt-10" src={imageUrl}></img>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-gray-500 pt-4 text-center">{title}</h1>
                            <h1 className="text-lg font-bold text-gray-400 pt-2 text-center">{position}</h1>
                        </div>
                    </div>
                </div>
                <div className="pt-60 flex justify-center">
                    <h1 className="text-xl font-semi-bold w-1/2">{shortIntro}</h1>
                </div>
            </div>


        </>
    )
}
