import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a comprehensive resume in HTML format that will render as PDF
    const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hariom Shivnani - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: white;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 20px;
        }
        
        .name {
            font-size: 2.5em;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 10px;
        }
        
        .title {
            font-size: 1.2em;
            color: #6b7280;
            margin-bottom: 15px;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            font-size: 0.9em;
            color: #4b5563;
        }
        
        .section {
            margin: 30px 0;
        }
        
        .section-title {
            font-size: 1.4em;
            font-weight: bold;
            color: #1e40af;
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }
        
        .education-item, .achievement-item {
            margin-bottom: 15px;
        }
        
        .institution {
            font-weight: bold;
            color: #1f2937;
        }
        
        .degree {
            color: #4b5563;
            font-style: italic;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }
        
        .skill-category {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        
        .skill-category h4 {
            color: #1e40af;
            margin-bottom: 10px;
        }
        
        .skill-list {
            list-style: none;
        }
        
        .skill-list li {
            padding: 3px 0;
            color: #4b5563;
        }
        
        .skill-list li:before {
            content: "▪ ";
            color: #3b82f6;
            font-weight: bold;
        }
        
        .achievement-list {
            list-style: none;
        }
        
        .achievement-list li {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .achievement-list li:before {
            content: "🏆 ";
            margin-right: 8px;
        }
        
        .traits {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .trait {
            background: #dbeafe;
            color: #1e40af;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.9em;
        }
        
        .motto {
            text-align: center;
            font-style: italic;
            font-size: 1.1em;
            color: #6366f1;
            background: #f0f9ff;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #3b82f6;
        }
        
        @media print {
            body { padding: 20px; }
            .section { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">HARIOM SHIVNANI</div>
        <div class="title">Student at JECRC | Tech and AI Enthusiast | Creative Thinker | Aspiring Software Developer</div>
        <div class="contact-info">
            <span>📧 hariom.shivnani23@gmail.com</span>
            <span>📍 Jaipur, Rajasthan</span>
            <span>💼 linkedin.com/in/hariom-shivnani</span>
            <span>🔗 github.com/hariom1610</span>
        </div>
    </div>

    <div class="section">
        <div class="section-title">EDUCATION</div>
        <div class="education-item">
            <div class="institution">JECRC Foundation, Jaipur</div>
            <div class="degree">B.Tech Computer Science Engineering (2nd Year)</div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">TECHNICAL SKILLS</div>
        <div class="skills-grid">
            <div class="skill-category">
                <h4>Programming Languages</h4>
                <ul class="skill-list">
                    <li>Python (85%)</li>
                    <li>C (80%)</li>
                    <li>JavaScript (60%)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Web Technologies</h4>
                <ul class="skill-list">
                    <li>HTML (75%)</li>
                    <li>CSS (80%)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Database</h4>
                <ul class="skill-list">
                    <li>MySQL (85%)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Soft Skills</h4>
                <ul class="skill-list">
                    <li>Communication</li>
                    <li>Leadership</li>
                    <li>Teamwork</li>
                    <li>Problem Solving</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">ACHIEVEMENTS</div>
        <ul class="achievement-list">
            <li><strong>Winner of multiple inter-house quiz competitions</strong> - Demonstrated strong knowledge and quick thinking abilities</li>
            <li><strong>Winner in various sports events</strong> - Showcased teamwork and competitive spirit</li>
            <li><strong>3rd place in CBSE national essay writing competition</strong> - Excellent writing and communication skills</li>
            <li><strong>Ex-member of JIC (JECRC Incubation Centre)</strong> - Contributed to innovation and entrepreneurship activities</li>
            <li><strong>Ex-intern at YIIC 2.0 by Scaler</strong> - Gained valuable industry experience and technical skills</li>
        </ul>
    </div>

    <div class="section">
        <div class="section-title">PERSONAL TRAITS</div>
        <div class="traits">
            <span class="trait">Creative</span>
            <span class="trait">Curious</span>
            <span class="trait">Disciplined</span>
            <span class="trait">Passionate</span>
            <span class="trait">Simple</span>
        </div>
    </div>

    <div class="section">
        <div class="section-title">HOBBIES & INTERESTS</div>
        <ul class="skill-list">
            <li>Reading</li>
            <li>Playing Games</li>
            <li>Exploring</li>
            <li>Learning New Things</li>
        </ul>
    </div>

    <div class="section">
        <div class="motto">
            "Building the future, one line of code at a time."
        </div>
    </div>
</body>
</html>
    `;

    // Create blob and download
    const blob = new Blob([resumeHTML], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Hariom_Shivnani_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    // Also provide instructions for PDF conversion
    setTimeout(() => {
      alert('Resume downloaded as HTML file! To convert to PDF: Open the downloaded file in your browser and use "Print > Save as PDF" for best results.');
    }, 500);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-20 right-4 z-40 flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full shadow-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 backdrop-blur-md border border-white/20"
    >
      <FileText className="h-4 w-4 mr-2" />
      <span className="hidden sm:inline">Resume</span>
      <Download className="h-4 w-4 ml-2" />
    </motion.button>
  );
};

export default ResumeDownload;