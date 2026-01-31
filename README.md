# IT23182882 Playwright Project

## Overview

This is a comprehensive **Playwright-based end-to-end (E2E) testing project** designed to validate the **Swift Translator** - a Sinhala transliteration tool that converts English phonetic text (Singlish) into Sinhala script. The project includes automated test cases covering positive functional scenarios, negative functional scenarios, and Excel report generation.

**Project ID:** IT23182882  
**Testing Framework:** Playwright 1.58.0  
**Test Type:** End-to-End (E2E) Browser Testing  
**Target Application:** [Swift Translator](https://www.swifttranslator.com/)

---

## 📋 Project Structure

```
IT23182882_Playwright_Project/
├── tests/
│   ├── IT23182882 - transliteration.spec.ts  # Main test suite (34 test cases)
│   ├── IT23182882-example.spec.ts            # Example Playwright tests
│   ├── IT23182882-generate_excel.ts          # Excel report generation script
│   └── node/
├── playwright-report/                        # HTML test reports
│   ├── index.html
│   └── data/
├── test-results/                             # Detailed test result artifacts
├── playwright.config.ts                      # Playwright configuration
├── package.json                              # Dependencies and project metadata
└── README.md                                 # Project documentation
```

---

## 🎯 Key Features

### Test Coverage

The project contains **34 comprehensive test cases** for the Swift Translator:

#### **Positive Functional Tests (24 cases)**
Tests that verify the translator correctly converts various Singlish input patterns:
- **Real-time output update:** Validates live translation as user types
- **Tense variations:** Future, Past, Present Continuous
- **Grammar forms:** Interrogative, Imperative, Command, Negation
- **Honorific usage:** Formal speech patterns
- **Special formats:** Currency, Date, Time
- **Complex inputs:** Long sentences, compound logic, multiple conjunctions
- **Mixed content:** English mixed with Sinhala, abbreviations, SMS slang
- **Punctuation & symbols:** Proper handling of special characters

#### **Negative Functional Tests (10 cases)**
Tests designed to validate edge cases and potential failure scenarios:
- Retroflex & Nasal confusion
- Aspirated logic failure
- Word segmentation errors
- Complex vowel conflicts
- English suffix confusion
- Phonetic overload
- Special symbol injection
- Abbreviation breakdown
- All caps phonetic shift
- Rare consonant clusters

### Test Execution Features

- **Parallel Execution:** Tests run in parallel for faster execution (configurable)
- **Chunked Input Typing:** Large inputs are typed in chunks for stability
- **Dynamic Output Waiting:** Waits up to 20 seconds for translation to stabilize before assertion
- **HTML Reporting:** Comprehensive HTML reports generated after test runs
- **CI/CD Ready:** Configuration for continuous integration environments

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (Node Package Manager)

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd IT23182882_Playwright_Project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install:
   - `@playwright/test@^1.58.0` - Playwright testing framework
   - `@types/node@^25.0.10` - TypeScript Node.js type definitions
   - `xlsx@^0.18.5` - Excel file generation

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

---

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/IT23182882\ -\ transliteration.spec.ts
```

### Run Tests in UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Tests with Headed Browser (Visible)
```bash
npx playwright test --headed
```

### Generate and View HTML Report
```bash
npx playwright show-report
```

---

## 📊 Test Configuration

The project uses `playwright.config.ts` with the following configuration:

- **Test Directory:** `./tests`
- **Parallel Execution:** Fully parallel (can be adjusted for CI)
- **Retries:** 0 on local, 2 on CI
- **Workers:** Auto on local, 1 on CI
- **Reporter:** HTML
- **Browser:** Chromium (Firefox and Safari commented out)
- **Trace:** Enabled on first retry for debugging
- **Timeout:** 30 seconds per test

---

## 📝 Test Case Format

Each test case in the main suite contains:

```typescript
{
  id: "Pos_Fun_0001",              // Unique test identifier
  name: "Future Tense",             // Descriptive test name
  input: "heta mal kadamu",         // Singlish input text
  expected: "හෙට මල් කඩමු"        // Expected Sinhala output
}
```

---

## 🔍 Key Testing Techniques

### Dynamic Wait Strategy
- Polls output element every 200ms
- Waits up to 20 seconds for stable output
- Considers output stable after 500ms of no changes

### Chunked Input Typing
- Splits large inputs into 100-character chunks
- Uses controlled delays (25-35ms) between characters
- Adds 50ms pause between chunks for stability

### Output Validation
- Uses Playwright's `toContainText()` assertion
- Trims whitespace for accurate matching
- Logs test execution details to console

---

## 📁 Test Results

After running tests, results are available in:

- **HTML Report:** `playwright-report/index.html`
- **Test Artifacts:** `test-results/` directory
- **Console Output:** Detailed logs with test ID, input, and output

### Test Result Metadata

Each test result includes:
- Test name and ID
- Input/Output comparison
- Execution time
- Pass/Fail status
- Browser information (Chromium)

---

## 📊 Excel Report Generation

The project includes a utility script `IT23182882-generate_excel.ts` for generating test case documentation in Excel format.

### Sample Test Case Structure
```
TC ID | Test case name | Input length type | Input | Expected output | Actual output | Status | Accuracy justification | What is covered by the test
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @playwright/test | ^1.58.0 | E2E testing framework |
| @types/node | ^25.0.10 | TypeScript type definitions |
| xlsx | ^0.18.5 | Excel file generation |

---

## 🛠️ Development Notes

### Environment Variables
- `CI` - Set to detect CI environment (triggers retries, single worker)
- Can be extended with `.env` file support (currently commented out)

### Base URL
- Tests target: `https://www.swifttranslator.com/`
- Can be configured in `use.baseURL` in `playwright.config.ts`

### Trace Collection
- Enabled on first retry for debugging failed tests
- Traces are viewable in Playwright Inspector

---

## 🐛 Troubleshooting

### Tests Timing Out
- Increase timeout in `playwright.config.ts`
- Check Swift Translator website availability
- Verify network connectivity

### Flaky Tests
- HTML tracing helps diagnose issues
- Review console logs for input/output details
- Check for timing issues in dynamic wait strategy

### Browser Compatibility
- Currently configured for Chromium only
- Firefox and Safari configurations available (commented out)
- Uncomment in `playwright.config.ts` to test multiple browsers

---

## 📈 Continuous Integration

The configuration automatically detects CI environment:
- **On CI:** Retries failed tests (2 retries), single worker
- **Locally:** No retries, parallel execution

To simulate CI locally:
```bash
CI=true npx playwright test
```

---

## 📚 Additional Resources

- [Playwright Official Documentation](https://playwright.dev/)
- [Swift Translator Website](https://www.swifttranslator.com/)
- [XLSX Documentation](https://github.com/SheetJS/sheetjs)

---

## 👨‍💼 Project Information

- **Student ID:** IT23182882
- **Project Type:** QA Automation / E2E Testing
- **Created:** 2026
- **Status:** Active

---

## 📄 License

ISC License

---

## ✅ Checklist for Running the Project

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] Playwright browsers installed (`npx playwright install`)
- [ ] Swift Translator website is accessible
- [ ] Run tests: `npx playwright test`
- [ ] View reports: `npx playwright show-report`

---

**For questions or issues, refer to the Playwright documentation or contact the project maintainer.**
