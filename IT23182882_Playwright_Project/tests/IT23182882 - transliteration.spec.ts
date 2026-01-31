import { test, expect } from '@playwright/test';

test.describe('Swift Translator - Sinhala Transliteration (34 Test Cases)', () => {

  const testCases = [
    // ================= POSITIVE FUNCTIONAL (24) =================
    { id: "Pos_UI_0001", name: "Real-time output update", input: "api yanavaa", expected: "අපි යනවා" },
    { id: "Pos_Fun_0001", name: "Future Tense", input: "heta mal kadamu", expected: "හෙට මල් කඩමු" },
    { id: "Pos_Fun_0002", name: "Compound Logic", input: "mama giyaa eeth eyaa aavee naee.", expected: "මම ගියා ඒත් එයා ආවේ නෑ." },
    { id: "Pos_Fun_0003", name: "Advice/Imperative", input: "vaessa unath api heta yanna epaeyi", expected: "වැස්ස උනත් අපි හෙට යන්න එපැයි" },
    { id: "Pos_Fun_0004", name: "Interrogative Form", input: "oyaa enne kiiyatadha?", expected: "ඔයා එන්නෙ කීයටද?" },
    { id: "Pos_Fun_0005", name: "Command", input: "ikmanata meeka karanna", expected: "ඉක්මනට මේක කරන්න" },
    { id: "Pos_Fun_0006", name: "Past Tense", input: "api giya maasee giyaa", expected: "අපි ගිය මාසේ ගියා" },
    { id: "Pos_Fun_0007", name: "Mixed Language", input: "meeka magee office eka", expected: "මේක මගේ office එක" },
    { id: "Pos_Fun_0008", name: "Plural Pronouns", input: "lamayi okkoma innavaa", expected: "ලමයි ඔක්කොම ඉන්නවා" },
    { id: "Pos_Fun_0009", name: "Honorific Usage", input: "obathumaa ekagadha?", expected: "ඔබතුමා එකගද?" },
    { id: "Pos_Fun_0010", name: "Currency Format", input: "rupiyal dhahas hathak", expected: "රුපියල් දහස් හතක්" },
    { id: "Pos_Fun_0011", name: "Date Format", input: "adha 2026-05-21", expected: "අද 2026-05-21" },
    { id: "Pos_Fun_0012", name: "Time Format", input: "velaava 10.30 AM", expected: "වෙලාව 10.30 AM" },
    { id: "Pos_Fun_0013", name: "Abbreviations", input: "NIC eka geenna", expected: "NIC එක ගේන්න" },
    { id: "Pos_Fun_0014", name: "SMS Slang", input: "kohomadha oyaata?", expected: "කොහොමද ඔයාට?" },
    { id: "Pos_Fun_0015", name: "Numerical Input", input: "number eka 077123", expected: "number එක 077123" },
    { id: "Pos_Fun_0016", name: "Present Continuous", input: "mama vaeda karanavaa", expected: "මම වැඩ කරනවා" },
    { id: "Pos_Fun_0017", name: "Negation", input: "mama dhannee nae", expected: "මම දන්නේ නැ" },
    { id: "Pos_Fun_0018", name: "Proper Nouns", input: "kamal pooyata pansal giyaa", expected: "කමල් පෝයට පන්සල් ගියා" },
    { id: "Pos_Fun_0019", name: "Question with Who", input: "kavudha ethana innee?", expected: "කවුද එතන ඉන්නේ?" },
    { id: "Pos_Fun_0020", name: "Place Names", input: "api kandy yanavaa", expected: "අපි kandy යනවා" },
    { id: "Pos_Fun_0021", name: "Punctuation Marks", input: "ammaa, thaaththaa saha mama.", expected: "අම්මා, තාත්තා සහ මම." },
    { id: "Pos_Fun_0022", name: "Long Sentence", input: "lankaava kiyannee indhiyanu saagarayee thiyena harima sundhara dhuupathak.indhiyan saagarayee muthu aetaya lesa hadhunvannee mee sundhara mahadhviipayayi. ratee minissu ithaamath  hodhayi. vividha dheeshaguna mee ratee thiyenavaa.", expected: "ලන්කාව කියන්නේ" },
    { id: "Pos_Fun_0023", name: "Complex Conjunction", input: "kussiyee vaeda karana athara ammaa kathaa kalaa", expected: "කුස්සියේ වැඩ කරන අතර අම්මා කතා කලා" },
    { id: "Pos_Fun_0024", name: "Request Form", input: "mata udhavvak ekak dhenna", expected: "මට උදව්වක් එකක් දෙන්න" },

    // ================= NEGATIVE FUNCTIONAL (10) =================
    { id: "Neg_Fun_0001", name: "Retroflex & Nasal Confusion", input: "kanda udin handha paayaddi", expected: "කන්ද උඩින් හඳ පායද්දී" },
    { id: "Neg_Fun_0002", name: "Aspirated Logic Failure", input: "dharma chakraaya karakavenava", expected: "ධර්ම චක්‍රය කරකැවෙනවා" },
    { id: "Neg_Fun_0003", name: "Word Segmentation Error", input: "mamakaemakaevaa", expected: "මම කෑම කෑවා" },
    { id: "Neg_Fun_0004", name: "Complex Vowel Conflict", input: "vrukshalathaa pruthiviyata", expected: "වෘක්ෂලතා පෘථිවියට" },
    { id: "Neg_Fun_0005", name: "English Suffix Confusion", input: "office ekee vada", expected: "office එකේ වැඩ" },
    { id: "Neg_Fun_0006", name: "Phonetic Overload", input: "shashshii nithara shashshaavata", expected: "ශෂී නිතර ශෂාට" },
    { id: "Neg_Fun_0007", name: "Special Symbol Injection", input: "ma@gee nama# kamal$", expected: "මගේ නම කමල්" },
    { id: "Neg_Fun_0008", name: "Abbreviation Breakdown", input: "adha B.I.C eka geenna", expected: "අද BIC එක ගේන්න" },
    { id: "Neg_Fun_0009", name: "All Caps Phonetic Shift", input: "MAMA YANAWA", expected: "මම යනවා" },
    { id: "Neg_Fun_0010", name: "Rare Consonant Clusters", input: "gnaanaya saha pragnaava", expected: "ඥානය සහ ප්‍රඥාව" }
  ];

  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/');

      const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
      const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

      await page.fill(inputSelector, '');
      await inputArea.click();

      // Chunked typing logic for better stability
      const text = tc.input;
      const CHUNK = 100;
      if (text.length > 0) {
        if (text.length <= CHUNK) {
          await inputArea.type(text, { delay: 35 });
        } else {
          for (let i = 0; i < text.length; i += CHUNK) {
            const chunk = text.slice(i, i + CHUNK);
            await inputArea.type(chunk, { delay: 25 });
            await page.waitForTimeout(50);
          }
        }
        await page.keyboard.press('Space');
      }

      // Output assertion (Targeting the results box)
      const outputBox = page.locator('div.bg-slate-50').first();
      
      if (tc.expected !== "") {
        // Wait up to 20s for the translation to appear and stabilize
        const MAX_WAIT = 20000;
        const POLL = 200;
        let lastText = '';
        let stableMs = 0;
        const start = Date.now();
        while (Date.now() - start < MAX_WAIT) {
          const current = (await outputBox.textContent()) || '';
          if (current.trim() === lastText.trim()) {
            stableMs += POLL;
            if (stableMs >= 500) break;
          } else {
            stableMs = 0;
            lastText = current;
          }
          await page.waitForTimeout(POLL);
        }

        // Positive tests should contain the correct expected output.
        // Negative tests are intended to FAIL: assert they contain the "buggy" expected
        // so the translator must NOT produce that buggy output (causing a test failure).
        if (tc.id.startsWith('Neg_')) {
          await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });
        } else {
          await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });
        }
      }

      const result = await outputBox.textContent();
      console.log(`Running: ${tc.id} | Input: ${tc.input} | Output: ${result}`);
    });
  }
});