import React, { useState } from 'react';

interface DomainOption {
  name: string;
  domain: string;
  availability: 'available' | 'taken' | 'expensive';
  price: string;
  scores: {
    pronounceability: number;
    memorability: number;
    spelling: number;
    brandability: number;
    techCredibility: number;
    domainQuality: number;
    uniqueness: number;
    meaning: number;
  };
  notes: string;
}

const DomainRubric: React.FC = () => {
  const [sortBy, setSortBy] = useState<'total' | 'name'>('total');

  const domainOptions: DomainOption[] = [
    {
      name: "Cosilico",
      domain: "cosilico.io",
      availability: 'available',
      price: "$45/yr",
      scores: {
        pronounceability: 3,
        memorability: 5,
        spelling: 3,
        brandability: 5,
        techCredibility: 5,
        domainQuality: 5,
        uniqueness: 5,
        meaning: 5
      },
      notes: "Infinite recursion: co·silico·silico... Deepest meaning. 'Together in simulation' endlessly."
    },
    {
      name: "Cosili.co",
      domain: "cosili.co",
      availability: 'available',
      price: "$26/yr",
      scores: {
        pronounceability: 5,
        memorability: 4,
        spelling: 4,
        brandability: 4,
        techCredibility: 4,
        domainQuality: 5,
        uniqueness: 4,
        meaning: 4
      },
      notes: "Maintains some recursion with .co extension. Easier to say but loses some depth."
    },
    {
      name: "Cilico",
      domain: "cilico.io",
      availability: 'available',
      price: "$45/yr",
      scores: {
        pronounceability: 5,
        memorability: 3,
        spelling: 2,
        brandability: 3,
        techCredibility: 4,
        domainQuality: 4,
        uniqueness: 3,
        meaning: 3
      },
      notes: "Loses 'co' prefix meaning and recursive pattern. Just computational, no collaboration."
    },
    {
      name: "Microsim",
      domain: "microsim.io",
      availability: 'available',
      price: "$45/yr",
      scores: {
        pronounceability: 5,
        memorability: 3,
        spelling: 5,
        brandability: 2,
        techCredibility: 4,
        domainQuality: 4,
        uniqueness: 2,
        meaning: 4
      },
      notes: "Generic, no deeper meaning. Could be any micro-simulation tool."
    },
    {
      name: "Schelling",
      domain: "schelling.io",
      availability: 'available',
      price: "$45/yr",
      scores: {
        pronounceability: 2,
        memorability: 3,
        spelling: 2,
        brandability: 3,
        techCredibility: 5,
        domainQuality: 4,
        uniqueness: 4,
        meaning: 4
      },
      notes: "Academic credibility but no poetic/recursive meaning. Practical issues remain."
    },
    {
      name: "Socisim",
      domain: "socisim.io",
      availability: 'available',
      price: "$45/yr",
      scores: {
        pronounceability: 5,
        memorability: 2,
        spelling: 4,
        brandability: 2,
        techCredibility: 3,
        domainQuality: 4,
        uniqueness: 2,
        meaning: 3
      },
      notes: "Literal, no depth, no poetry. Just 'social simulation' - boring."
    }
  ];

  const calculateTotal = (scores: DomainOption['scores']) => {
    return Object.values(scores).reduce((a, b) => a + b, 0);
  };

  const sortedOptions = [...domainOptions].sort((a, b) => {
    if (sortBy === 'total') {
      return calculateTotal(b.scores) - calculateTotal(a.scores);
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const getScoreColor = (score: number) => {
    if (score >= 4) return 'text-green-600';
    if (score >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'available':
        return <span className="badge-available">Available</span>;
      case 'taken':
        return <span className="badge-taken">Taken</span>;
      case 'expensive':
        return <span className="badge-expensive">Premium</span>;
      default:
        return null;
    }
  };

  return (
    <div className="rubric-container">
      <h1>Domain Name Evaluation Rubric</h1>
      <p className="rubric-description">
        Evaluating potential domain names for the open-source societal simulation platform.
        Each criterion is scored 1-5, with 5 being the best.
      </p>

      <div className="sort-controls">
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'total' | 'name')}>
          <option value="total">Total Score</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div className="rubric-grid">
        <div className="rubric-header">
          <div>Domain</div>
          <div>Pronounce</div>
          <div>Memory</div>
          <div>Spelling</div>
          <div>Brand</div>
          <div>Tech</div>
          <div>Domain</div>
          <div>Unique</div>
          <div>Meaning</div>
          <div>Total</div>
          <div>Status</div>
        </div>

        {sortedOptions.map((option) => {
          const total = calculateTotal(option.scores);
          return (
            <div key={option.name} className="rubric-row">
              <div className="domain-info">
                <strong>{option.name}</strong>
                <span className="domain-url">{option.domain}</span>
                <span className="domain-price">{option.price}</span>
              </div>
              <div className={getScoreColor(option.scores.pronounceability)}>{option.scores.pronounceability}</div>
              <div className={getScoreColor(option.scores.memorability)}>{option.scores.memorability}</div>
              <div className={getScoreColor(option.scores.spelling)}>{option.scores.spelling}</div>
              <div className={getScoreColor(option.scores.brandability)}>{option.scores.brandability}</div>
              <div className={getScoreColor(option.scores.techCredibility)}>{option.scores.techCredibility}</div>
              <div className={getScoreColor(option.scores.domainQuality)}>{option.scores.domainQuality}</div>
              <div className={getScoreColor(option.scores.uniqueness)}>{option.scores.uniqueness}</div>
              <div className={getScoreColor(option.scores.meaning)}>{option.scores.meaning}</div>
              <div className="total-score">{total}/40</div>
              <div>{getAvailabilityBadge(option.availability)}</div>
              <div className="notes">{option.notes}</div>
            </div>
          );
        })}
      </div>

      <div className="criteria-legend">
        <h2>Scoring Criteria</h2>
        <ul>
          <li><strong>Pronounceability:</strong> How easy is it to say out loud without confusion?</li>
          <li><strong>Memorability:</strong> Will people remember it after hearing it once?</li>
          <li><strong>Spelling:</strong> Can people spell it correctly after hearing it?</li>
          <li><strong>Brandability:</strong> Does it work as a strong brand name?</li>
          <li><strong>Tech Credibility:</strong> Does it signal technical sophistication?</li>
          <li><strong>Domain Quality:</strong> Is the TLD (.io, .com, .co) appropriate and valuable?</li>
          <li><strong>Uniqueness:</strong> Is it distinctive and not easily confused with others?</li>
          <li><strong>Meaning:</strong> Does it convey the platform's purpose effectively?</li>
        </ul>
      </div>
    </div>
  );
};

export default DomainRubric;