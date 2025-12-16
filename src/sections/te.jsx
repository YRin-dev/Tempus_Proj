// const StoryContent = () => {
//     return (
//       <Box
//         sx={{
//           width: '100%',
//           mt: 1,
//           position: 'relative',
//           minHeight: '100vh',
//         }}
//       >
//         <Box
//           width={'100%'}
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             position: 'relative',
//             zIndex: 1,
//           }}
//         >
//           <Box
//             sx={{
//               transform: 'translateY(80px)',
//               animation: 'slideUp 0.8s ease-out 0.2s forwards',
//               opacity: 0,
//               '@keyframes slideUp': {
//                 '0%': {
//                   opacity: 0,
//                   transform: 'translateY(80px)',
//                 },
//                 '100%': {
//                   opacity: 1,
//                   transform: 'translateY(0)',
//                 },
//               },
//             }}
//           >
//             <Stack
//               width={'100%'}
//               spacing={4}
//               alignItems="center"
//               sx={{
//                 p: 4,
//                 borderRadius: 2,
//                 backdropFilter: 'blur(5px)',
//               }}
//             >
//               <Typography
//                 width={'100%'}
//                 textAlign="center"
//                 fontWeight={'400'}
//                 color="#c0c0c0"
//                 sx={{
//                   whiteSpace: 'pre-line',
//                   lineHeight: 1.4,
//                   fontSize: {
//                     xs: '1.1rem',
//                     sm: '1.3rem',
//                     md: '1.8rem',
//                     lg: '2.2rem',
//                   },
//                 }}
//               >
//                 {technologyContent.h1Title}
//               </Typography>
//               <Typography
//                 width={'100%'}
//                 fontWeight={'bold'}
//                 textAlign="center"
//                 color="#E0e0e0"
//                 sx={{
//                   mt: 2,
//                   fontSize: {
//                     xs: '0.9rem',
//                     sm: '1rem',
//                     md: '1.2rem',
//                     lg: '1.4rem',
//                   },
//                 }}
//               >
//                 {technologyContent.description}
//               </Typography>
//             </Stack>
//           </Box>
//         </Box>
//       </Box>
//     );
//   };
