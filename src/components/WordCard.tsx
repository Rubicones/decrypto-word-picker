import Image from "next/image";
import toggleOff from "../../public/toggleOff.png";
import toggleOn from "../../public/toggleOn.png";
import frame from "../../public/decryptoFrame.png";
import screw from "../../public/screw.png";

type WordCardProps = {
    cardNo: number;
    word: string;
    isHidden: boolean;
};
const WordCard = ({ cardNo, word, isHidden }: WordCardProps) => {
    return (
        <div className='relative min-w-[300px] h-[450px]  p-4 bg-slate-100/50 carouselItem overflow-hidden'>
            <Image
                className='absolute size-4 top-1 left-1'
                src={screw}
                alt='screw'
            ></Image>
            <Image
                className='absolute size-4 top-1 right-1'
                src={screw}
                alt='screw'
            ></Image>
            <Image
                className='absolute size-4 bottom-1 left-1'
                src={screw}
                alt='screw'
            ></Image>
            <Image
                className='absolute size-4 bottom-1 right-1'
                src={screw}
                alt='screw'
            ></Image>
            <div className='w-full aspect-[4/3] flex items-center justify-center relative'>
                <Image
                    className='w-full absolute top-1/2 left-1/2 -translate-1/2'
                    src={frame}
                    alt='frame'
                />
                <div className='crt bg-[#f60000] inset-shadow-[-1px_1px_30px_18px_#00000066] w-full h-[168px] mb-1 mx-3 rounded-xl flex items-center justify-center'>
                    <div className='w-full h-full flex items-center justify-center inset-shadow-[6px_6px_10px_6px_#00000066] rounded-4xl'>
                        <span className='text-center text-black uppercase font-bold text-4xl line-clamp max-w-[200px]'>
                            {isHidden ? "✱✱✱✱✱✱✱" : word}
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full flex'>
                <div className='flex w-2/3 flex-col justify-between'>
                    <div className='w-full flex justify-between items-center h-20'>
                        <Image
                            src={
                                cardNo === 1 || cardNo === 3
                                    ? toggleOn
                                    : toggleOff
                            }
                            alt='toggle'
                            className={`${
                                cardNo === 1 || cardNo === 3
                                    ? "w-10"
                                    : "w-10 translate-y-1"
                            }`}
                        />
                        <Image
                            src={
                                cardNo === 2 || cardNo === 4
                                    ? toggleOn
                                    : toggleOff
                            }
                            alt='toggle'
                            className={`${
                                cardNo === 2 || cardNo === 4
                                    ? "w-10"
                                    : "w-10 translate-y-1"
                            }`}
                        />
                        <Image
                            src={cardNo !== 1 ? toggleOn : toggleOff}
                            alt='toggle'
                            className={`${
                                cardNo !== 1 ? "w-10" : "w-10 translate-y-1"
                            }`}
                        />
                    </div>
                    <div className='grid grid-cols-12 grid-rows-2 gap-[2px] -translate-y-20'>
                        {...Array.from({ length: 24 }).map((_, i) => (
                            <div
                                className='w-[7px] h-5 rounded-full bg-black shadow-[2px_2px_3px_0px_#00000088]'
                                key={i}
                            ></div>
                        ))}
                    </div>
                </div>
                <span className='seven-seg text-[11rem] text-right  w-1/2 text-slate-400 '>
                    {cardNo}
                </span>
            </div>
        </div>
    );
};

export default WordCard;
