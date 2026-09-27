import React from "react";
import { Stepper, Step, StepLabel, Typography, Box } from "@mui/material";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Web Development Intern",
      company: "Unified Mentor",
      period: "Jun 2025 – Aug 2025",
      points: [
        "Built and deployed 3+ full-stack MERN applications using modular backend architecture and RESTful API design.",
        "Integrated JWT-based authentication and role-based access control supporting multiple user roles, improving API response efficiency by 20%."
      ]
    },
    {
      role: "AI Intern",
      company: "Mirai School of Technology",
      period: "Jul 2025 – Aug 2025",
      points: [
        "Built an AI-powered itinerary generation system integrating 5+ external APIs for dynamic recommendation workflows.",
        "Orchestrated multi-step workflow pipelines reducing manual processing time by approximately 30%."
      ]
    }
  ];

  const steps = [
    "Unified Mentor — Full Stack Intern",
    "Mirai School of Technology — AI Intern"
  ];

  return (
    <Box sx={{ margin: "2em" }}>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{ color: "black", fontWeight: "bold" }}
        className="font-robotoCondensed"
      >
        My Experience
      </Typography>

      <Stepper
        activeStep={steps.length}
        alternativeLabel
        sx={{ marginBottom: "2em" }}
      >
        {steps.map((label, index) => (
          <Step key={index} completed={true}>
            <StepLabel
              StepIconProps={{
                sx: {
                  "&.Mui-active": { color: "#64FCD9" },
                  "&.Mui-completed": { color: "#2196F3" }
                }
              }}
            >
              <Typography sx={{ color: "#333", fontWeight: 600 }}>
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
        {experiences.map((exp, idx) => (
          <Box
            key={idx}
            sx={{
              backgroundColor: "#F0F4F8",
              padding: "1.5em",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "0.5em" }}>
              <Typography
                variant="h6"
                sx={{ color: "#2196F3", fontWeight: "bold" }}
              >
                {exp.role} — {exp.company}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#666", fontWeight: "bold" }}
              >
                {exp.period}
              </Typography>
            </Box>
            <Typography variant="body1" component="div" sx={{ color: "#555" }}>
              <ul style={{ paddingLeft: "1.2em", margin: 0 }}>
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} style={{ marginBottom: "0.4em" }}>
                    {pt}
                  </li>
                ))}
              </ul>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
