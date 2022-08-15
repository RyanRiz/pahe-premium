import React from 'react'

function Mediainfo() {
  return (
    <div className='border border-black bg-[#353535] mx-5 py-5 my-5 px-5 text-white'>
        <table className='space-x-3'>
            <tr>
                <td>File</td>
                <td className='px-5'>.mkv</td>
            </tr>
            <tr>
                <td>Source</td>
                <td className='px-5'>BluRay 1080p TrueHD Atmos 7.1 AVC REMUX-FraMeSToR</td>
            </tr>
            <tr>
                <td>Video</td>
                <td className='px-5'>AVC | 1280x536 1083 Kbps</td>
            </tr>
            <tr>
                <td>Audio</td>
                <td className='px-5'>6CH AAC 192 Kbps English</td>
            </tr>
            <tr>
                <td>Runtime</td>
                <td className='px-5'>2h 56mn</td>
            </tr>
            <tr>
                <td>Subtitles</td>
                <td className='px-5'>English softcoded</td>
            </tr>
            <tr>
                <td>Chapter</td>
                <td className='px-5'>Numbered</td>
            </tr>
        </table>
    </div>
  )
}

export default Mediainfo