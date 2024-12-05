import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'


const index = () => {
    return (
        <section>
            <div className="container mx-auto max-w-[1440px]">
                <div className='pt-[100px] flex justify-center'>

                    <div className='mb-[151px] mx-[50px] md:mx-0'>

                        <Accordion defaultIndex={[0]} allowMultiple>

                            <AccordionItem border='none' w={{ base: "309px", md: "812px" }}>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' fontSize={20} mb={{base:'15px', md:'0'}} >
                                        Can I upgrade later <br className='hidden md:flex'/> on?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod,consectetur adipiscing elit, sed do eiusmod  adipiscing elit, sed do eiusmod

                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' fontSize={20} mb={{base:'15px', md:'0'}}>
                                        Can I port my data from 
                                        another <br className='hidden md:flex'/> provider?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' fontSize={20} mb={{base:'15px', md:'0'}}>
                                        Are my food photos stored 
                                        forever in the <br className='hidden md:flex'/> cloud?

                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' fontSize={20} mb={{base:'15px', md:'0'}}>
                                        Who foots the bill for <br/> that?

                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' fontSize={20} mb={{base:'15px', md:'0'}}>
                                        What's the real <br/> cost?

                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} fontSize={16}>
                                    As long as your current affiliate earning are over $100, you'll be paid roughly every 45 days. <br />
                                    If you haven't earned $100 since your last payment, we'll pay you roughly 45 days after <br />
                                    you've crossed the threshold. Payments are only made via PayPal. <br />
                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default index;